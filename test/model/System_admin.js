'use strict';

const app = require('../../build/app');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('../../build/middleware/authorization')(app, passport, mongoose);

const System_admin = mongoose.model('System_admin');

describe('System Admin', function () {
    it('correctly correctly clears CU lock', function () {
        /*TODO: SysAdmin may choose CU from list to clear locks, it's also automatically run every night for all older than 3 hours*/
    });

});