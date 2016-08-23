'use strict';

const app = require('../../build/app');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('../../build/middleware/authorization')(app, passport, mongoose);

const Verification_unit_manager = mongoose.model('Verification');

describe('Verification Unit Manager', function () {

});