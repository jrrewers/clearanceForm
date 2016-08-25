'use strict';

module.exports = function (app, passport, mongoose) {
    const pauth = passport.authenticate.bind(passport);
    const Review = mongoose.model('Review');

    app.post('/sendClearanceRequest', /*pauth('local'),*/ async function (req, res) {
        let AjaxResponse = {};
        console.log(1);
            let ClearanceRequestsArr = [];
            let requestedClearanceUnits = [];

            if (!req.body.requestedClearanceUnits || !req.body.employee_id ) {
                AjaxResponse.success = false;
                AjaxResponse.err = 'Missing array of requested Clearance Units or employee id';
                res.send(AjaxResponse);
            }

            // make sure employee has not waiting request for selected clearance units now
            req.body.requestedClearanceUnits.forEach(function(requestedClearanceUnit){
                requestedClearanceUnits.push(requestedClearanceUnit.substr(14));
            });

            let foundOtherWaitingClearanceRequests = await Review.find({
                clearance_unit_id: {$in: requestedClearanceUnits},
                employee_id: employee_id,
                is_waiting: true
            }).exec();

            if (foundOtherWaitingClearanceRequests.length !== 0) {
                AjaxResponse.success = false;
                AjaxResponse.err = 'At least one duplicate request was found. Query wasn\'t executed. Details: ' + foundOtherWaitingClearanceRequests;
                res.send(AjaxResponse);
            }

            //create an array of objects where each objects represents a request to save
            requestedClearanceUnits.forEach(function (requestedClearanceUnit) {
                let reqObj = {
                    clearance_unit_id: requestedClearanceUnit,
                    employee_id: req.user._id,
                    requested_timestamp: Date.now()
                };
                ClearanceRequestsArr.push(reqObj);
            });

            //using Model.insertMany insert array of request objects to db
            let insertManyRequestes = await Review.insertMany(ClearanceRequestsArr);
            AjaxResponse.success = true;
            AjaxResponse._ids = [];
            insertManyRequestes.forEach(requested => AjaxResponse._ids.push(requested.clearance_unit_id));
            res.send(AjaxResponse);
    });
};
