'use strict';
const app = require('../../build/app');
const chai = require('chai');
const sinon = require('sinon');
chai.should();
require('../util');
const request = require('superagent');
const superAgent = request.agent();
const mongoose = require('mongoose');
const passport = require('passport');

describe('Review routes', function () {
    const Review = mongoose.model('Review');
    const clearanceUnitNumber = Math.round(Math.random()*18);
    const userToAffect = Math.round(Math.random()*434);
    const sendClearanceRequestUrl = '127.0.0.1:3000/sendClearanceRequest';
    const getEmployeeChecklistUrl = '127.0.0.1:3000/employeeChecklist';

    /*sendReviewRequest*/
    it('sends a clearance request', async function (done) {
        superAgent
            .post(sendClearanceRequestUrl)
            .send({
                requestedClearanceUnits: [
                    `ClearanceUnit_${clearanceUnitNumber}`,
                    `ClearanceUnit_${clearanceUnitNumber + 2}`,
                    `ClearanceUnit_${clearanceUnitNumber + 4}`
                ],
                userToAffect: userToAffect
            })
            .end(async function(err, res){
                //test returned object
                res.body.success.should.equal(true);
                res.body._ids[0].should.equal(clearanceUnitNumber);
                res.body._ids[1].should.equal(clearanceUnitNumber + 2);
                res.body._ids[2].should.equal(clearanceUnitNumber + 4);

                //test if values were inserted into db
                let found = await Review.find({
                    clearance_unit_id: {$in: [
                        clearanceUnitNumber,
                        clearanceUnitNumber + 2,
                        clearanceUnitNumber + 4
                    ]},
                    employee_id: userToAffect,
                    is_waiting: true
                }).exec();

                found.length.should.equal(3);

                found[0].clearance_unit_id.should.equal(clearanceUnitNumber);
                found[1].clearance_unit_id.should.equal(clearanceUnitNumber + 2);
                found[2].clearance_unit_id.should.equal(clearanceUnitNumber + 4);

                found[0].employee_id.should.equal(found[1].employee_id);
                found[1].employee_id.should.equal(found[2].employee_id);
                found[2].employee_id.should.equal(userToAffect);

                done();
            });
    });

    it('not allows to send two same clearance unit numbers at once', function (done) {
        superAgent
            .post(sendClearanceRequestUrl)
            .send({
                requestedClearanceUnits: [
                    `ClearanceUnit_${clearanceUnitNumber}`,
                    `ClearanceUnit_${clearanceUnitNumber}`
                ],
                userToAffect: userToAffect
            })
            .end(function (err, res) {
                res.body.success.should.equal(false);
                done();
        })
    });

    it('not allows to send request for clearance unit if user already has one waiting request for this clearance unit', function (done) {
        superAgent
            .post(sendClearanceRequestUrl)
            .send({
                requestedClearanceUnits: [
                    `ClearanceUnit_${clearanceUnitNumber}`,
                    `ClearanceUnit_${clearanceUnitNumber + 2}`,
                    `ClearanceUnit_${clearanceUnitNumber + 4}`
                ],
                userToAffect: userToAffect
            })
            .end(async function(err, res){
                superAgent
                    .post(sendClearanceRequestUrl)
                    .send({
                        requestedClearanceUnits: [`ClearanceUnit_${clearanceUnitNumber}`, `ClearanceUnit_${clearanceUnitNumber + 2}`, `ClearanceUnit_${clearanceUnitNumber + 4}`],
                            userToAffect: userToAffect
                    })
                    .end(async function(err, res){
                        res.body.success.should.equal(false);
                        done();
                    });
            });

    });

    /*getEmployeeReviewsAndClearanceUnits*/
    it('returns data about employee reviews and clearance unit', async function (done) {
        const mock_review_1 = {
            clearance_unit_id: clearanceUnitNumber,
            employee_id: userToAffect,
            requested_timestamp: Date.now(),
            is_waiting: true,
        };
        const mock_review_2 = {
            clearance_unit_id: clearanceUnitNumber + 2,
            employee_id: userToAffect,
            requested_timestamp: Date.now() - 2000,
            is_waiting: false,
            review: false,
            review_timestamp: Date.now()
        };
        const mock_review_3 = {
            clearance_unit_id: clearanceUnitNumber + 3,
            employee_id: userToAffect,
            requested_timestamp: Date.now() - 2000,
            is_waiting: false,
            review: true,
            review_timestamp: Date.now()
        };

        let saved = await Review.insertMany([mock_review_1, mock_review_2, mock_review_3]);

        superAgent
            .post(getEmployeeChecklistUrl)
            .send({
                userToAffect: userToAffect
            })
            .end(async function (err, res) {
                console.log(res.body);
                res.body.success.should.eql(true);
                res.body.userReviews[0].clearance_unit_id.should.eql(mock_review_1.clearance_unit_id);
                res.body.userReviews[0].employee_id.should.eql(mock_review_1.employee_id);
                res.body.userReviews[1].is_waiting.should.eql(mock_review_2.is_waiting);
                res.body.userReviews[2].review.should.eql(mock_review_3.review);
                done();
            })

    });

    /*getPendingReviewRequests*/
    it('returnes a pending clearance requests and - if CU calls them - lock them, if sysadmin - show all and not lock', function (done) {
        /*TODO: test for getting pending clearance requests*/
        done();
    });

    /*clearReviewPendingLock*/
    it('clears lock for pending reviews', function (done) {
        /*TODO: test for clearing pending review lock*/
        done();
    });

});

