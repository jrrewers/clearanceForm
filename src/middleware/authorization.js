'use strict';
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
//const mongoose = require('mongoose');
/*let test_model = mongoose.model('test');
let test_model2 = mongoose.model('test2');
let mock_models = require('../model/Mock_Models');*/

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let test_schema = new Schema({
    username: String,
    password: String,
    group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
});
let test_model = mongoose.model('test', test_schema);

let test_schema2 = new Schema({
    username: String,
    password: String,
    group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
});
let test_model2 = mongoose.model('test2', test_schema2);


module.exports = function (app, passport) {
    passport.use('local', new localStrategy(
        async function (username, password, done) {
            try {
                console.log('entered');
                let foundIn_test_model = await test_model.findOne({username: username}).exec();
                if (!!foundIn_test_model && (bcrypt.compareSync(password, foundIn_test_model.password))) {
                    return done(null, foundIn_test_model)
                }
                let foundIn_test_model2 = await test_model2.findOne({username: username}).exec();
                if (!!foundIn_test_model2 && (bcrypt.compareSync(password, foundIn_test_model2.password))) {
                    return done(null, foundIn_test_model2)
                }
                return done(null, false)
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        test_model.findById(id, function(err, user) {
            done(err, user);
        });
    });
};