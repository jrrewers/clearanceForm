'use strict';

let util = require('../util');
let app = require('../../build/app');
let passport = require('passport');
let mongoose = require('mongoose');
let Auth = require('../../build/middleware/authorization')(app, passport, mongoose);

describe('Middleware: Authorization', function () {
    
    beforeEach(function () {
        this.request = sinon.stub(http, 'request')
    });

    it('creates correctly all types of users', function *() {
        let clearance_unit_admin = {
            username: 'clearance_unit_admin',
            unHashedPassword: Math.random().toString(36),
            password: bcrypt.hashSync(this.unHashedPassword),
            group: 'clearance_unit_admins'
        };
        let clearance_unit_manager = {
            username: 'clearance_unit_manager',
            unHashedPassword: Math.random().toString(36),
            password: bcrypt.hashSync(this.unHashedPassword),
            group: 'clearance_unit_managers'
        };
        let verification_unit_admin = {
            username: 'verification_unit_admin',
            unHashedPassword: Math.random().toString(36),
            password: bcrypt.hashSync(this.unHashedPassword),
            group: 'verification_unit_admins'
        };
        let verification_unit_manager = {
            username: 'verification_unit_manager',
            unHashedPassword: Math.random().toString(36),
            password: bcrypt.hashSync(this.unHashedPassword),
            group: 'verification_unit_managers'
        };
        let employee = {
            username: 'employee',
            unHashedPassword: Math.random().toString(36),
            password: bcrypt.hashSync(this.unHashedPassword),
            group: 'employee'
        };
        

    });

});