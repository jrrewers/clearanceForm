'use strict';
const app = require('../build/app');
//require('util');
const chai = require('chai');
const sinon = require('sinon');
chai.should();
let bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');
require('../build/middleware/authorization')(app, passport, mongoose);

describe('test', function () {

    it('should create and authenticate user', async function () {
        let test_model = mongoose.model('test');

        const unhashedPassword = Math.random().toString(36);
        const passed = {
            username: Math.random().toString(36),
            password: bcrypt.hashSync(unhashedPassword),
            group: 'clearance_unit_managers'
        };
        let saved = await new test_model(passed).save();
        let returned = await test_model.findOne({_id: saved._id}).exec();

        returned.username.should.equal(passed.username);
        bcrypt.compareSync(unhashedPassword, returned.password).should.equal(true);

    });

    afterEach(function () {
        console.log("test finished");
    });


});
