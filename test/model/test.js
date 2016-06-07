'use strict';
let co = require('co');
let coMocha = require('co-mocha');
let chai = require('chai');
let chaiAsPromised = require("chai-as-promised");
let sinon = require('sinon');
let expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();
let bcrypt = require('bcryptjs');
let mongoose = require('mongoose');
let MongoDB = mongoose.connect('mongodb://localhost:27017/clearanceForm-test').connection;

describe('test', function () {
    beforeEach(function (done) {
        function clearDB() {
            done();
        }

        if (mongoose.connection.readyState === 0) {
            let MongoDB = mongoose.connect('mongodb://localhost:27017/clearanceForm-test')
            MongoDB.on('error', function(err) { console.log(err.message); });
            MongoDB.once('open', function() {
                console.log("mongodb test connection open");
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

    it('should create a document', function *() {
        let Schema = mongoose.Schema;
        let test_schema = new Schema({
            first: String,
            second: String
        });
        let test_model = mongoose.model('test', test_schema);

        let sth = new test_model({first: '111', second: '222'});
        let savedUser = yield sth.save();
        let foundUser = yield test_model.findById(savedUser._id);
        savedUser._id.toString().should.equal(foundUser._id.toString());

    });
});
