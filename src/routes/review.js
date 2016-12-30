'use strict';

module.exports = function (app, passport, mongoose) {
    //const pauth = passport.authenticate.bind(passport);
    const Review = mongoose.model('Review');
    const CUModel = mongoose.model('Clearance_unit');

    app.post('/sendClearanceRequest', /*pauth('local'),*/ async function (req, res) {
        let response = {};
        let requestsArr = [];
        let requestedCUs = [];
        console.log(req.body.requestedClearanceUnits[0].substr(14));


        if (!req.body.requestedClearanceUnits || !req.body.userToAffect ) {
            response.success = false;
            response.err = 'Missing array of requested Clearance Units or employee id';
            return res.send(response);
        }

        // make sure employee has not waiting request for selected clearance units now
        req.body.requestedClearanceUnits.forEach(function(requestedCU){
            requestedCUs.push(requestedCU.substr(14));
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
        console.log(req.body);

        //fetch all user reviews
        let userReviews = await Review.find({employee_id: req.body.userToAffect}).populate('clearance_unit_id').exec();

        //iterate through all user reviews, if one is waiting or positively reviewed add id of clearance unit from this review to array.
        userReviews.forEach(function (userReview) {
            /*TODO: create mongoose method for that*/
            if (userReview.is_waiting || !userReview.is_waiting && !userReview.review) {
                requestedCUs.push(userReview.clearance_unit_id._id)
            }
        });

        //fetch all clearance units and add mayBeRequested property to each of them so the can later be disabled for request on front end.
        let availCUs = await CUModel.find().lean().exec();
        console.log(1, requestedCUs);
        console.log(2, availCUs);
        /*TODO: comparing not working due to objectID/String type mismatch*/
        availCUs.forEach(availCU => availCU.mayBeRequested = requestedCUs.indexOf(availCU._id) === -1);

        response = {
            success: true,
            userReviews: userReviews,
            clearanceUnits: availCUs
        };

        res.send(response);

    });
};
