'use strict';

const app = require('../../build/app');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('../../build/middleware/authorization')(app, passport, mongoose);

const Clearance_unit_manager = mongoose.model('Clearance_unit_manager');
describe('Clearance Unit Manager', function () {
    it('adds new Clearance Unit Manager', async function () {
        let unhashedPassword = Math.random().toString(36);
        let passed = {
            username: 'Test Clearance Unit',
            group: 'clearance_unit_managers',
            password: bcrypt.hashSync(unhashedPassword),
            name: 'Some name',
            mail: 'mail@mail.com'
        };

        let saved = await Clearance_unit_manager(passed).save();
        saved.username.should.equal(passed.username);
        saved.group.should.equal(passed.group);
        bcrypt.hashSync(unhashedPassword, saved.password).should.equal(true);
        saved.name.should.equal(passed.name);

    });

    it('adds new clearance unit admin', function *() {
        /*TODO: test adding new clearance unit admin*/
    });

    it('changes password correctly', async function () {
        let oldPassword = Math.random().toString(36);
        let newPassword = Math.random().toString(36);
        let passed = {
            username: 'Test Clearance Unit',
            group: 'clearance_unit_managers',
            password: bcrypt.hashSync(oldPassword),
            name: 'Some name',
            mail: 'mail@mail.com'
        };

        /*let clearanceUnitManagerSaved = await Clearance_unit_manager(passed).save();
        let passwordChangeResult = await Clearance_unit_manager.changePassword(bcrypt.hashSync(newPassword)).exec();
        let clearanceUnitManagerFound = await Clearance_unit_manager.findById(clearance_unit_manager._id);

        passwordChangeResult.should.equal(true);
        bcrypt.hashSync(newPassword, clearanceUnitManagerFound.password).should.equal(true);*/
    });

    it('gets list of watiting clearance requests', function *() {
        /*TODO: test for gets list of watiting clearance requests*/
    });

    it('resolves clearance request', function *() {
        /*TODO: test for resolving clearance requests - all possible cases*/
    });

    it('resets password correctly', function *() {
        /*TODO: test for password reset - method should return new password? - move to login tests*/
    });

    it('registers new clearance unit manager', function *() {
        /*TODO: test for new clearance unit manager - only if admin - move to login tests*/
    });



});