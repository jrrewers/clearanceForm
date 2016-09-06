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

describe('Employee routes', function () {
    let Review = mongoose.model('Review');
    let clearanceUnitNumber = Math.round(Math.random()*18);
    let employee_id = Math.round(Math.random()*434);
    let sendClearanceRequestUrl = '127.0.0.1:3000/sendClearanceRequest';

    it('should correctly send a clearance request', async function (done) {
        superAgent
            .post(sendClearanceRequestUrl)
            .send({
                requestedClearanceUnits: [`ClearanceUnit_${clearanceUnitNumber}`, `ClearanceUnit_${clearanceUnitNumber + 2}`, `ClearanceUnit_${clearanceUnitNumber + 4}`],
                user: {
                    _id: employee_id
                }
            })
            .end(async function(err, res){
                //test returned object
                res.body.success.should.equal(true);
                res.body._ids[0].should.equal(clearanceUnitNumber);
                res.body._ids[1].should.equal(clearanceUnitNumber + 2);
                res.body._ids[2].should.equal(clearanceUnitNumber + 4);

                //test if values were inserted into db
                let found = await Review.find({
                    clearance_unit_id: {$in: [clearanceUnitNumber, clearanceUnitNumber + 2, clearanceUnitNumber + 4]},
                    employee_id: employee_id,
                    is_waiting: true
                }).exec();

                found.length.should.equal(3);

                found[0].clearance_unit_id.should.equal(clearanceUnitNumber);
                found[1].clearance_unit_id.should.equal(clearanceUnitNumber + 2);
                found[2].clearance_unit_id.should.equal(clearanceUnitNumber + 4);

                found[0].employee_id.should.equal(found[1].employee_id);
                found[1].employee_id.should.equal(found[2].employee_id);
                found[2].employee_id.should.equal(employee_id);

                done();
            });
    });

    it('should not allow to send two same clearance unit numbers at once', function (done) {
        superAgent
            .post('127.0.0.1:3000/sendClearanceRequest')
            .send({
                requestedClearanceUnits: [`ClearanceUnit_${clearanceUnitNumber}`, `ClearanceUnit_${clearanceUnitNumber}`],
                user: {
                    _id: employee_id
                }
            })
            .end(function (err, res) {
                res.body.success.should.equal(false);
                done();
        })
    });

    it('should not allow to send request for clearance unit if user already has one waiting request for this clearance unit', function (done) {
        superAgent
            .post('127.0.0.1:3000/sendClearanceRequest')
            .send({
                requestedClearanceUnits: [`ClearanceUnit_${clearanceUnitNumber}`, `ClearanceUnit_${clearanceUnitNumber + 2}`, `ClearanceUnit_${clearanceUnitNumber + 4}`],
                user: {
                    _id: employee_id
                }
            })
            .end(async function(err, res){
                superAgent
                    .post('127.0.0.1:3000/sendClearanceRequest')
                    .send({
                        requestedClearanceUnits: [`ClearanceUnit_${clearanceUnitNumber}`, `ClearanceUnit_${clearanceUnitNumber + 2}`, `ClearanceUnit_${clearanceUnitNumber + 4}`],
                        user: {
                            _id: employee_id
                        }
                    })
                    .end(async function(err, res){
                        res.body.success.should.equal(false);
                        done();
                    });
            });

    });

});

