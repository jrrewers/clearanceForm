'use strict';
const app = require('../../build/app');
const chai = require('chai');
const sinon = require('sinon');
chai.should();
require('../util');
const request = require('superagent');
const superAgent = request.agent();
const mongoose = require('mongoose');
const passport = require('passport');

describe('employee routes', function () {

    it('sets mail notification status', function () {
        /*TODO: test for mail notification status change*/
    });

    it('send notification mail', function () {
        /*TODO: test for notification mailing*/
    });
});