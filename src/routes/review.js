'use strict';

module.exports = function (app, passport, mongoose) {
    const pauth = passport.verifyAccess.bind(passport);
    const Review = mongoose.model('Review');
    const CUModel = mongoose.model('Clearance_unit');

    app.post('/sendClearanceRequest', pauth('local'), async function (req, res) {
        let response = {};
        let requestsArr = [];
        let requestedCUs = req.body.requestedClearanceUnits;
        const employee_id = req.body.userToAffect;

        if (!requestedCUs || !employee_id) {
            response.success = false;
            response.err = 'Missing array of requested Clearance Units or employee id';
            return res.send(response);
        }

        // make sure employee has not waiting request for selected clearance units now
        requestedCUs = requestedCUs.map((element) => {
            return element.substr(14)
        });
        let conflictingRequests = await Review.find({
            clearance_unit_id: {$in: requestedCUs},
            employee_id: employee_id,
            is_waiting: true
        }).exec();

        if (conflictingRequests.length !== 0) {
            response.success = false;
            response.err = 'At least one duplicate request was found. Query wasn\'t executed. Details: ' + conflictingRequests;
            return res.send(response);
        }

        //create an array of objects where each objects represents a request to save
        requestsArr = requestedCUs.map((element) => {
            return {
                clearance_unit_id: element,
                employee_id: req.body.userToAffect,
                requested_timestamp: Date.now(),
                is_waiting: true
            };
        });

        //using Model.insertMany insert array of request objects to db
        let savedRequests = await Review.insertMany(requestsArr);
        response.success = true;
        response._ids = savedRequests.map((element) => {
            return element.clearance_unit_id
        });
        return res.send(response);
    });

    app.post('/employeeChecklist', pauth('employees'), async function (req, res) {
            let response = {};
            let requestedCUs = [];

            //fetch all user reviews
            let userReviews = await Review.find({employee_id: req.body.userToAffect})
                .populate('clearance_unit_id').exec();

            //iterate through all user reviews, if one is waiting or positively reviewed add id of clearance unit from this review to array.
            userReviews.forEach((uReview) => {
                requestedCUs.push(uReview.clearance_unit_id._id.toString())
            });

            //fetch all clearance units and dd mayBeRequested property to each of them so the can later be disabled for request on front end.
            let availCUs = await CUModel.find().lean().exec();
            availCUs.forEach(availCU => {
                availCU.mayBeRequested = requestedCUs.indexOf(availCU._id.toString()) === -1
            });

            response.success = true;
            response.userReviews = userReviews;
            response.clearanceUnits = availCUs;

            res.send(response);

        });

    app.post('/getWaitingReviews', pauth('local'), async function (req, res) {
        let CU,
            response = {},
            waitingReviews,
            lockedReviews;

        //CU Managers and Admins may request reviews only for Clarance Unit they are assigned to
        if (req.user.group === 'clearance_unit_managers' || req.user.group === 'clearance_unit_admins') {
            CU = req.user.clearance_unit_id;
        } else if (req.body.ClearanceUnitToAffect) {
            CU = req.body.ClearanceUnitToAffect;
        } else {
            response.success = false;
            response.err = 'Desired Clearance Unit couldn\'t be resolved';
            return res.send(response);
        }

        // find waiting reviews which this user may see
        waitingReviews = await Review.find({
            is_waiting: true,
            is_locked: {$exists: false},
            clearance_unit_id: CU
        }).exec();

        if (waitingReviews.length === 0) {
            response.succes = true;
            response.waitingReviews = [];
            return res.send(response);
        }

        // lock these reviews so other CU Manager won't abe able to work on them simultaneously.

        lockedReviews = await Review.find({
            _id: {
                $in: waitingReviews.map((element) => {
                    return element._id
                })
            }
        }).update({
            is_locked: true,
            locked_timestamp: new Date(),
            locked_by_cu_manager_id: req.user._id
        })
            .exec();
        console.log(waitingReviews.length === lockedReviews.nModified);

        res.send([waitingReviews, waitingReviews.length === lockedReviews.nModified])

    });

};