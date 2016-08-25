'use strict';

const app = require('../../build/app');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('../../build/middleware/authorization')(app, passport, mongoose);

const Employee = mongoose.model('Employee');

describe('Employee', function () {
    it('correctly sends a clearance request', function () {
        /*TODO: send clearance request method */
    });

    it('can see details of own clearance requests', function () {
        /*TODO: call to API to return details of each clearance request for employee but only hers own*/
    });

    it('may change e-mail notifications status', function () {
        /*TODO: user may choose whether to receive e-mail notifications about clearance resolve or not*/
    })

});