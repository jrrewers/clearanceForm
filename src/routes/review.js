'use strict';

module.exports = function (app, passport, mongoose) {
    //const pauth = passport.authenticate.bind(passport);
    const Review = mongoose.model('Review');
    const ClearanceUnit = mongoose.model('Clearance_unit');

    app.post('/sendClearanceRequest', /*pauth('local'),*/ async function (req, res) {
        let AjaxResponse = {};
        let ClearanceRequestsArr = [];
        let requestedClearanceUnits = [];

        if (!req.body.requestedClearanceUnits || !req.body.user._id ) {
            AjaxResponse.success = false;
            AjaxResponse.err = 'Missing array of requested Clearance Units or employee id';
            return res.send(AjaxResponse);
        }

        // make sure employee has not waiting request for selected clearance units now
        req.body.requestedClearanceUnits.forEach(function(requestedClearanceUnit){
            requestedClearanceUnits.push(Number(requestedClearanceUnit.substr(14)));
        });
        let foundOtherWaitingClearanceRequests = await Review.find({
            clearance_unit_id: {$in: requestedClearanceUnits},
            employee_id: req.body.user._id,
            is_waiting: true
        }).exec();

        if (foundOtherWaitingClearanceRequests.length !== 0) {
            AjaxResponse.success = false;
            AjaxResponse.err = 'At least one duplicate request was found. Query wasn\'t executed. Details: ' + foundOtherWaitingClearanceRequests;
            return res.send(AjaxResponse);
        }

        //create an array of objects where each objects represents a request to save
        requestedClearanceUnits.forEach(function (requestedClearanceUnit) {
            let reqObj = {
                clearance_unit_id: requestedClearanceUnit,
                employee_id: req.body.user._id,
                requested_timestamp: Date.now(),
                is_waiting: true
            };
            ClearanceRequestsArr.push(reqObj);
        });

        //using Model.insertMany insert array of request objects to db
        let insertManyRequests = await Review.insertMany(ClearanceRequestsArr);
        AjaxResponse.success = true;
        AjaxResponse._ids = [];
        insertManyRequests.forEach(requested => AjaxResponse._ids.push(requested.clearance_unit_id));
        return res.send(AjaxResponse);
    });

    app.post('/employeeChecklist', async function (req, res) {
        let AjaxResponse = {};
        let requestedClearanceUnits = [];

        //fetch all user reviews
        let userReviews = await Review.find({
            employee_id: req.body.user_id
        })
            .populate('clearance_unit_id')
            .exec();

        //iterate through all user reviews, if one is waiting or not waiting but positively reviewed add id of clearance unit from this review to array.
        userReviews.forEach(function (userReview) {
            if (userReview.is_waiting || !userReview.is_waiting && !userReview.review) {
                requestedClearanceUnits.push(userReview.clearance_unit_id._id)
            }
        });

        //fetch all clearance units and add mayBeRequested property to each of them so the can later be disabled for request on front end.
        let employeeClearanceUnits = await ClearanceUnit.find().lean().exec();
        employeeClearanceUnits.forEach(function (EmployeeClearanceUnit) {
            if (requestedClearanceUnits.indexOf(EmployeeClearanceUnit._id) !== -1) {
                EmployeeClearanceUnit.mayBeRequested = false;
            }
        });

        AjaxResponse = {
            success: true,
            userReviews: userReviews,
            clearanceUnits: employeeClearanceUnits
        };

        res.send(AjaxResponse);

    });
};
