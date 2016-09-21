'use strict';
const app = require('../../build/app');
const chai = require('chai');
const sinon = require('sinon');
chai.should();
require('../util');
const request = require('superagent-promise')(require('superagent'), Promise);
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');

describe('Common routes', function () {
    let Clearance_unit_manager = mongoose.model('Clearance_unit_manager');
    let Verification_unit_manager = mongoose.model('Verification_unit_manager');
    let Employee = mongoose.model('Employee');
    let System_admin = mongoose.model('System_admin');
    let registerUserUrl = '127.0.0.1:3000/registerUser';
    let unHashedPassword = Math.random().toString(36);

    let verification_unit_admin = {
        username: 'verification_unit_admin',
        password: bcrypt.hashSync(unHashedPassword),
        group: 'verification_unit_admins'
    };
    let verification_unit_manager = {
        username: 'verification_unit_manager',
        password: bcrypt.hashSync(unHashedPassword),
        group: 'verification_unit_managers'
    };
    let clearance_unit_admin = {
        username: 'clearance_unit_admin',
        password: bcrypt.hashSync(unHashedPassword),
        group: 'clearance_unit_admins'
    };
    let clearance_unit_manager = {
        username: 'clearance_unit_manager',
        password: bcrypt.hashSync(unHashedPassword),
        group: 'clearance_unit_managers'
    };
    let employee = {
        username: 'employee',
        password: bcrypt.hashSync(unHashedPassword),
        group: 'employee'
    };
    let system_admin = {
        username: 'system_admin',
        password: bcrypt.hashSync(unHashedPassword),
        group: 'system_admins'
    };

    /*registerUser*/
    it('creates all types of users', function (done) {
        let verification_unit_adminPromise = request.post(registerUserUrl).send(verification_unit_admin).end();
        let verification_unit_managerPromise = request.post(registerUserUrl).send(verification_unit_manager).end();
        let clearance_unit_adminPromise = request.post(registerUserUrl).send(clearance_unit_admin).end();
        let clearance_unit_managerPromise = request.post(registerUserUrl).send(clearance_unit_manager).end();
        let employeePromise = request.post(registerUserUrl).send(employee).end();
        let system_adminPromise = request.post(registerUserUrl).send(system_admin).end();

        Promise.all([
            verification_unit_adminPromise,
            verification_unit_managerPromise,
            clearance_unit_adminPromise,
            clearance_unit_managerPromise,
            employeePromise,
            system_adminPromise
        ]).then(function (values) {
            console.log(values);
            done();
        }).catch(function (err) {
            done(err);
        })

    });

    /*changePassword*/
    it('changes password for all users', function () {
        /*TODO: test for changing employee password*/
    });

    /*resetPassword*/
    it('resets password', function () {
        /*TODO: test for resetting employee password*/
    });

    /*registerUnit*/
    it('registers all types of new units', function () {
        /*TODO: test for registering new units*/
    });

});