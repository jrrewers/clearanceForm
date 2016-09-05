'use strict';
let app = require('../build/app');
let chai = require('chai');
let sinon = require('sinon');
chai.should();
const mongoose = require('mongoose');
const passport = require('passport');

beforeEach(async function (done) {
    function clearDB() {
        mongoose.connection.db.dropDatabase();
        done();
    }


    if (mongoose.connection.readyState === 0) {
        let MongoDB = mongoose.connect('mongodb://localhost:27017/clearanceForm-test');
        MongoDB.on('error', function(err) { console.log(err.message); });
        MongoDB.once('open', function() {
            console.log("mongodb test connection open a");
            clearDB()
        });
    } else {
        clearDB();
    }
});
