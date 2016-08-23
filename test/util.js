'use strict';
let app = require('../build/app');
let chai = require('chai');
let chaiAsPromised = require("chai-as-promised");
let sinon = require('sinon');
let expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();
let bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');
require('../build/middleware/authorization')(app, passport, mongoose);
let MongoDB = mongoose.connect('mongodb://localhost:27017/clearanceForm-test').connection;
let request = require('request');
let http = require('http');

beforeEach(function (done) {
    function clearDB() {
        for (var i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function() {});
        }
        return done();
    }


    if (mongoose.connection.readyState === 0) {
        let MongoDB = mongoose.connect('mongodb://localhost:27017/clearanceForm-test');
        MongoDB.on('error', function(err) { console.log(err.message); });
        MongoDB.once('open', function() {
            console.log("mongodb test connection open a");
            return clearDB()
        });
    } else {
        return clearDB();
    }
});

afterEach(function (done) {
    mongoose.disconnect();
    return done();
});