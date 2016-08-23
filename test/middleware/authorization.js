'use strict';

let util = require('../util');
let app = require('../../build/app');
let mongoose = require('mongoose');

describe('Middleware: Authorization', function () {
    
    /*beforeEach(function () {
        this.request = sinon.stub(http, 'request')
    });*/

    it('creates correctly all types of users', function *() {

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