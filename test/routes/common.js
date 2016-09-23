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
    const Clearance_unit_manager = mongoose.model('Clearance_unit_manager');
    const Verification_unit_manager = mongoose.model('Verification_unit_manager');
    const Employee = mongoose.model('Employee');
    const System_admin = mongoose.model('System_admin');
    const registerUserUrl = '127.0.0.1:3000/registerUser';
    const changePasswordUrl = '127.0.0.1:3000/changePassword';
    const resetPasswordUrl = '127.0.0.1:3000/resetPassword';
    const unHashedPassword = Math.random().toString(36);
    const newUnHashedPassword = Math.random().toString(36);

    const verification_unit_admin = {
        username: 'verification_unit_admin',
        password: bcrypt.hashSync(unHashedPassword),
        mail: `${this.username}@mail.com`,
        group: 'verification_unit_admins'
    };
    const verification_unit_manager = {
        username: 'verification_unit_manager',
        password: bcrypt.hashSync(unHashedPassword),
        mail: `${this.username}@mail.com`,
        group: 'verification_unit_managers'
    };
    const clearance_unit_admin = {
        username: 'clearance_unit_admin',
        password: bcrypt.hashSync(unHashedPassword),
        mail: `${this.username}@mail.com`,
        group: 'clearance_unit_admins'
    };
    const clearance_unit_manager = {
        username: 'clearance_unit_manager',
        password: bcrypt.hashSync(unHashedPassword),
        mail: `${this.username}@mail.com`,
        group: 'clearance_unit_managers'
    };
    const employee = {
        username: 'employee',
        password: bcrypt.hashSync(unHashedPassword),
        mail: `${this.username}@mail.com`,
        group: 'employees'
    };
    const system_admin = {
        username: 'system_admin',
        password: bcrypt.hashSync(unHashedPassword),
        mail: `${this.username}@mail.com`,
        group: 'system_admins'
    };


    /*registerUser*/
    it('creates all types of users', function (done) {
        let verification_unit_adminPromise = request.post(registerUserUrl).send({userToSave: verification_unit_admin}).end();
        let verification_unit_managerPromise = request.post(registerUserUrl).send({userToSave: verification_unit_manager}).end();
        let clearance_unit_adminPromise = request.post(registerUserUrl).send({userToSave: clearance_unit_admin}).end();
        let clearance_unit_managerPromise = request.post(registerUserUrl).send({userToSave: clearance_unit_manager}).end();
        let employeePromise = request.post(registerUserUrl).send({userToSave: employee}).end();
        let system_adminPromise = request.post(registerUserUrl).send({userToSave: system_admin}).end();

        Promise.all([
            verification_unit_adminPromise,
            verification_unit_managerPromise,
            clearance_unit_adminPromise,
            clearance_unit_managerPromise,
            employeePromise,
            system_adminPromise
        ]).then(async function (values) {
            let found_verification_unit_admin = await Verification_unit_manager.findById(values[0]._id);
            let found_verification_unit_manager = await Verification_unit_manager.findById(values[1]._id);
            let found_clearance_unit_admin = await Clearance_unit_manager.findById(values[2]._id);
            let found_clearance_unit_manager = await Clearance_unit_manager.findById(values[3]._id);
            let found_employee = await employee.findById(values[4]._id);
            let found_system_admin = await System_admin.findById(values[5]._id);

            found_verification_unit_admin.username.should.equal(verification_unit_admin.username);
            bcrypt.compareSync(unHashedPassword, found_verification_unit_admin.password).should.equal(true);
            found_verification_unit_manager.username.should.equal(verification_unit_manager.username);
            bcrypt.compareSync(unHashedPassword, found_verification_unit_manager.password).should.equal(true);
            found_clearance_unit_admin.username.should.equal(clearance_unit_admin.username);
            bcrypt.compareSync(unHashedPassword, found_clearance_unit_admin.password).should.equal(true);
            found_clearance_unit_manager.username.should.equal(clearance_unit_manager.username);
            bcrypt.compareSync(unHashedPassword, found_verification_unit_manager).should.equal(true);
            found_employee.username.should.equal(employee.username);
            bcrypt.compareSync(unHashedPassword, found_employee.password).should.equal(true);
            found_system_admin.username.should.equal(system_admin);
            bcrypt.compareSync(unHashedPassword, found_system_admin.password).should.equal(true);
            done();
        }).catch(function (err) {
            done(err);
        })

    });

    it('does not create user with taken mail', function (done) {
        let verification_unit_adminPromise = request.post(registerUserUrl).send({userToSave: verification_unit_admin}).end();
        let verification_unit_managerPromise = request.post(registerUserUrl).send({userToSave: verification_unit_manager}).end();
        let clearance_unit_adminPromise = request.post(registerUserUrl).send({userToSave: clearance_unit_admin}).end();
        let clearance_unit_managerPromise = request.post(registerUserUrl).send({userToSave: clearance_unit_manager}).end();
        let employeePromise = request.post(registerUserUrl).send({userToSave: employee}).end();
        let system_adminPromise = request.post(registerUserUrl).send({userToSave: system_admin}).end();

        Promise.all([
            verification_unit_adminPromise,
            verification_unit_managerPromise,
            clearance_unit_adminPromise,
            clearance_unit_managerPromise,
            employeePromise,
            system_adminPromise
        ]).then(async function () {
            let same_mail_employee = request.post(registerUserUrl).send({userToSave: employee}).end();
            /*TODO: there should be error */

        }).catch(function (err) {
            done(err);
        });
        done();
    });

    /*changePassword*/
    it('changes password for all users', async function () {
        let verification_unit_adminPromise = request.post(registerUserUrl).send({userToSave: verification_unit_admin}).end();
        let verification_unit_managerPromise = request.post(registerUserUrl).send({userToSave: verification_unit_manager}).end();
        let clearance_unit_adminPromise = request.post(registerUserUrl).send({userToSave: clearance_unit_admin}).end();
        let clearance_unit_managerPromise = request.post(registerUserUrl).send({userToSave: clearance_unit_manager}).end();
        let employeePromise = request.post(registerUserUrl).send({userToSave: employee}).end();
        let system_adminPromise = request.post(registerUserUrl).send({userToSave: system_admin}).end();

        Promise.all([
            verification_unit_adminPromise,
            verification_unit_managerPromise,
            clearance_unit_adminPromise,
            clearance_unit_managerPromise,
            employeePromise,
            system_adminPromise
        ]).then(async function (values) {
            let found_verification_unit_admin = await Verification_unit_manager.findById(values[0]._id);
            let found_verification_unit_manager = await Verification_unit_manager.findById(values[1]._id);
            let found_clearance_unit_admin = await Clearance_unit_manager.findById(values[2]._id);
            let found_employee = await employee.findById(values[4]._id);
            let found_system_admin = await System_admin.findById(values[5]._id);

            let changed_password_verification_unit_admin = await request.post(changePasswordUrl).send({
                changePassword:{
                    userToAffect: found_verification_unit_admin._id,
                    oldPassword: unHashedPassword,
                    newPassword: newUnHashedPassword
                }
            });
            let changed_password_verification_unit_manager = await request.post(changePasswordUrl).send({
                changePassword:{
                    userToAffect: found_verification_unit_manager._id,
                    oldPassword: unHashedPassword,
                    newPassword: newUnHashedPassword
                }
            });
            let changed_password_clearance_unit_admin = await request.post(changePasswordUrl).send({
                changePassword:{
                    userToAffect: found_clearance_unit_admin._id,
                    oldPassword: unHashedPassword,
                    newPassword: newUnHashedPassword
                }
            });
            let changed_password_clearance_unit_manager = await request.post(changePasswordUrl).send({
                changePassword:{
                    userToAffect: found_clearance_unit_manager._id,
                    oldPassword: unHashedPassword,
                    newPassword: newUnHashedPassword
                }
            });
            let changed_password_employee = await request.post(changePasswordUrl).send({
                changePassword:{
                    userToAffect: found_employee._id,
                    oldPassword: unHashedPassword,
                    newPassword: newUnHashedPassword
                }
            });
            let changed_password_system_admin = await request.post(changePasswordUrl).send({
                changePassword:{
                    userToAffect: found_system_admin._id,
                    oldPassword: unHashedPassword,
                    newPassword: newUnHashedPassword
                }
            });

            bcrypt.compareSync(newUnHashedPassword, changed_password_verification_unit_admin.password).should.equal(true);
            bcrypt.compareSync(newUnHashedPassword, changed_password_verification_unit_manager.password).should.equal(true);
            bcrypt.compareSync(newUnHashedPassword, changed_password_clearance_unit_admin.password).should.equal(true);
            bcrypt.compareSync(newUnHashedPassword, changed_password_clearance_unit_manager.password).should.equal(true);
            bcrypt.compareSync(newUnHashedPassword, changed_password_employee.password).should.equal(true);
            bcrypt.compareSync(newUnHashedPassword, changed_password_system_admin.password).should.equal(true);

            done();
        }).catch(function (err) {
            done(err);
        })

    });

    /*resetPassword*/
    it('resets password', function () {
        let verification_unit_adminPromise = request.post(registerUserUrl).send({userToSave: verification_unit_admin}).end();
        let verification_unit_managerPromise = request.post(registerUserUrl).send({userToSave: verification_unit_manager}).end();
        let clearance_unit_adminPromise = request.post(registerUserUrl).send({userToSave: clearance_unit_admin}).end();
        let clearance_unit_managerPromise = request.post(registerUserUrl).send({userToSave: clearance_unit_manager}).end();
        let employeePromise = request.post(registerUserUrl).send({userToSave: employee}).end();
        let system_adminPromise = request.post(registerUserUrl).send({userToSave: system_admin}).end();

        Promise.all([
            verification_unit_adminPromise,
            verification_unit_managerPromise,
            clearance_unit_adminPromise,
            clearance_unit_managerPromise,
            employeePromise,
            system_adminPromise
        ]).then(async function (values) {
            let found_verification_unit_admin = await Verification_unit_manager.findById(values[0]._id);
            let found_verification_unit_manager = await Verification_unit_manager.findById(values[1]._id);
            let found_clearance_unit_admin = await Clearance_unit_manager.findById(values[2]._id);
            let found_employee = await employee.findById(values[4]._id);
            let found_system_admin = await System_admin.findById(values[5]._id);

            await request.post(resetPasswordUrl).send({
                resetPassword:{
                    userToAffect: found_verification_unit_admin._id,
                }
            });
            await request.post(resetPasswordUrl).send({
                resetPassword:{
                    userToAffect: found_verification_unit_manager._id,
                }
            });
            await request.post(resetPasswordUrl).send({
                resetPassword:{
                    userToAffect: found_clearance_unit_admin._id,
                }
            });
            await request.post(resetPasswordUrl).send({
                resetPassword:{
                    userToAffect: found_clearance_unit_manager._id,
                }
            });
            await request.post(resetPasswordUrl).send({
                resetPassword:{
                    userToAffect: found_employee._id,
                }
            });
            await request.post(resetPasswordUrl).send({
                resetPassword:{
                    userToAffect: found_system_admin._id,
                }
            });

            let reset_password_verification_unit_admin = await Verification_unit_manager.findById(found_verification_unit_admin._id);
            let reset_password_verification_unit_manager = await Verification_unit_manager.findById(found_verification_unit_manager._id);
            let reset_password_clearance_unit_admin = await Clearance_unit_manager.findById(found_clearance_unit_admin._id);
            let reset_password_clearance_unit_manager = await Clearance_unit_manager.findById(found_verification_unit_manager._id);
            let reset_password_employee = await Employee.findById(found_employee._id);
            let reset_password_system_admin = await System_admin.findById(found_system_admin._id);

            reset_password_verification_unit_admin.password.should.not.eql(unHashedPassword);
            reset_password_verification_unit_manager.password.should.not.eql(unHashedPassword);
            reset_password_clearance_unit_admin.password.should.not.eql(unHashedPassword);
            reset_password_clearance_unit_manager.password.should.not.eql(unHashedPassword);
            reset_password_employee.password.should.not.eql(unHashedPassword);
            reset_password_system_admin.password.should.not.eql(unHashedPassword);

            done();
        }).catch(function (err) {
            done(err);
        })
    });

    /*registerUnit*/
    it('registers all types of new units', function () {
        /*TODO: test for registering new units*/
    });

});