'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const babelRegister = require('babel-register');
const babelPolyfill = require('babel-polyfill');
const chai = require('chai');
const sinon = require('sinon');
chai.should();
const request = require('supertest');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
let passport = require('passport');
const localStrategy = require('passport-local');


describe('test', function () {

    beforeEach(function (done) {
        if (mongoose.connection.readyState === 0) {
            mongoose.connect('mongodb://localhost:27017/clearanceForm-test', function () {
                console.log("mongodb test connection open");
                done();
            });
        }
    });

    afterEach(function () {
        console.log("test finished");
    });

    it('logs in', async function () {
        passport.use(new localStrategy(
            async function (username, password, done) {
                try {
                    console.log('entered');
                    let foundIn_test_model = await test_model.findOne({username: username});
                    if (!!foundIn_test_model && (bcrypt.compareSync(password, foundIn_test_model.password))) {
                        return done(null, foundIn_test_model)
                    }
                    let foundIn_test_model2 = await test_model2.findOne({username: username});
                    if (!!foundIn_test_model2 && (bcrypt.compareSync(password, foundIn_test_model2.password))) {
                        return done(null, foundIn_test_model2)
                    }
                    return done(null, false)
                } catch (error) {
                    return done(error);
                }
            }
        ));

        let Schema = mongoose.Schema;
        let test_schema = new Schema({
            username: String,
            password: String,
            group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
        });
        let test_model = mongoose.model('test', test_schema);

        let test_schema2 = new Schema({
            username: String,
            password: String,
            group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
        });
        let test_model2 = mongoose.model('test2', test_schema2);

        const unhashedPassword = Math.random().toString(36);
        const passed = {
            username: Math.random().toString(36),
            password: bcrypt.hashSync(unhashedPassword),
            group: 'clearance_unit_managers'
        };

        let saved = await new test_model(passed).save();

        let user = request.agent();
        


    });

});
