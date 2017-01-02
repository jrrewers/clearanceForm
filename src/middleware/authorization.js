'use strict';
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

module.exports = function (app, passport, mongoose) {
    const Clearance_unit_manager = mongoose.model('Clearance_unit_manager'),
        Verification_unit_manager = mongoose.model('Verification_unit_manager'),
        Employee = mongoose.model('Employee'),
        System_admin = mongoose.model('System_admin');

    passport.use('local', new localStrategy(
        async function (username, password, done) {
            const verifyFound = function (found) {
                if (!!found && (bcrypt.compareSync(password, found.password))) {
                    return done(null, found);
                }
            };

            try {
                console.log('entered');
                const foundInCUManagers = await Clearance_unit_manager.findOne({username: username}).exec();
                verifyFound(foundInCUManagers);
                const foundInVUManagers = await Clearance_unit_manager.findOne({username: username}).exec();
                verifyFound(foundInVUManagers);
                return done(null, false)
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        test_model.findById(id, function (err, user) {
            done(err, user);
        });
    });
};