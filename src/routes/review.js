'use strict';

module.exports = function (app, passport, mongoose) {
    //const pauth = passport.authenticate.bind(passport);
    const Review = mongoose.model('Review');
    const CUModel = mongoose.model('Clearance_unit');

    app.post('/sendClearanceRequest', /*pauth('local'),*/ async function (req, res) {
        let response = {};
        let requestsArr = [];
        let requestedCUs = [];

        if (!req.body.requestedClearanceUnits || !req.body.userToAffect ) {
            response.success = false;
            response.err = 'Missing array of requested Clearance Units or employee id';
            return res.send(response);
        }

        // make sure employee has not waiting request for selected clearance units now
        req.body.requestedClearanceUnits.forEach(function(requestedCU){
            requestedCUs.push(Number(requestedCU.substr(14)));
        });
        let conflictingRequests = await Review.find({
            clearance_unit_id: {$in: requestedCUs},
            employee_id: req.body.userToAffect,
            is_waiting: true
        }).exec();

        if (conflictingRequests.length !== 0) {
            response.success = false;
            response.err = 'At least one duplicate request was found. Query wasn\'t executed. Details: ' + conflictingRequests;
            return res.send(response);
        }

        //create an array of objects where each objects represents a request to save
        requestedCUs.forEach(function (requestedCU) {
            let reqObj = {
                clearance_unit_id: requestedCU,
                employee_id: req.body.userToAffect,
                requested_timestamp: Date.now(),
                is_waiting: true
            };
            requestsArr.push(reqObj);
        });

        //using Model.insertMany insert array of request objects to db
        let insertManyRequests = await Review.insertMany(requestsArr);
        response.success = true;
        response._ids = [];
        insertManyRequests.forEach(requested => response._ids.push(requested.clearance_unit_id));
        return res.send(response);
    });

    app.post('/employeeChecklist', async function (req, res) {
        let response = {};
        let requestedCUs = [];

        //fetch all user reviews
        let userReviews = await Review.find({
            employee_id: req.body.userToAffect,
        })
        //TODO: commented for test, it should be populated
            //.populate('clearance_unit_id')
            .exec();
        //iterate through all user reviews, if one is waiting or not waiting but positively reviewed add id of clearance unit from this review to array.
        userReviews.forEach(function (userReview) {
            if (userReview.is_waiting || !userReview.is_waiting && !userReview.review) {
                if (userReview.clearance_unit_id._id) {
                    requestedCUs.push(userReview.clearance_unit_id._id)
                } else {
                    //TODO: only for test, delete
                    requestedCUs.push(userReview.clearance_unit_id)
                }

            }
        });

        //fetch all clearance units and add mayBeRequested property to each of them so the can later be disabled for request on front end.
        let employeeCUs = await CUModel.find().lean().exec();
        employeeCUs.forEach(function (employeeCU) {
            if (requestedCUs.indexOf(employeeCU._id) !== -1) {
                employeeCU.mayBeRequested = false;
            }
        });

        response = {
            success: true,
            userReviews: userReviews,
            clearanceUnits: employeeCUs
        };

        res.send(response);

    });
};
