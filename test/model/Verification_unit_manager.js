'use strict';

const app = require('../../build/app');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('../../build/middleware/authorization')(app, passport, mongoose);

const Verification_unit_manager = mongoose.model('Verification');

describe('Verification Unit Manager', function () {
    it('correctly returnes list of all VU employees who !is_verfied and final status of each employee', async function () {
        /*TODO: method returning a set of employee id, employee name and employee final status for whole VU, where !employee.is_verified */
    });

    it('can look for employee by name or id and', function () {
        /*TODO: metohd returning search result list in form of employee id, employee name and employee final status. VU Manager may select, whether she is interested in seeing employee.is_verified too. */
    });

    it('can see details of employee', function () {
        /*TODO: call to API to return details of each clearance request for employee*/
    })

});