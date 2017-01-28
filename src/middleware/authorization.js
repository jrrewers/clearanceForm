'use strict';
const LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcryptjs');

module.exports = function (app, passport, mongoose) {
    const Clearance_unit_manager = mongoose.model('Clearance_unit_manager'),
        Verification_unit_manager = mongoose.model('Verification_unit_manager'),
        Employee = mongoose.model('Employee'),
        System_admin = mongoose.model('System_admin');

    passport.use('local', new LocalStrategy(
        async function (username, password, done) {
            let foundInEmployees,
                foundInCUManagers,
                foundInVUManagers,
                foundInSysAdmins,
                verifyFound = function (found) {
                    if (!!found && (bcrypt.compareSync(password, found.password))) {
                        return done(null, found);
                    }
                };

            try {
                foundInEmployees = await Employee.findOne({username: username}).exec();
                verifyFound(foundInEmployees);
                foundInCUManagers = await Clearance_unit_manager.findOne({username: username}).exec();
                verifyFound(foundInCUManagers);
                foundInVUManagers = await Verification_unit_manager.findOne({username: username}).exec();
                verifyFound(foundInVUManagers);
                foundInSysAdmins = await System_admin.findOne({username: username}).exec();
                verifyFound(foundInSysAdmins);
                return done(null, false)
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, {id: user._id, group: user.group});
    });

    passport.deserializeUser(async function (user, done) {
        let found,
            verifyFound;

        verifyFound = function (found) {
            if (!!found) {
                done(null, found);
            }
        };

        try {
            if (user.group === 'employees') {
                found = await Employee.findById(user.id).exec();
            } else if (user.group === 'clearance_unit_managers' || user.group === 'clearance_unit_admins') {
                found = await Clearance_unit_manager.findById(user.id).exec();
            } else if (user.group === 'verification_unit_managers' || user.group === 'verification_unit_admins') {
                found = await Verification_unit_manager.findById(user.id).exec();
            } else if (user.group === 'employees') {
                found = await System_admin.findById(user.id).exec();
            }
            verifyFound(found);
        } catch (error) {
            return done(error);
        }
    });

    passport.verifyAccess = function(group) {
        return [
            passport.authenticate('local'),
            function(req, res, next) {
                if (req.user.group === group) {
                    next();
                } else {
                    res.send(401, 'bad girl!')
                }
            }
        ];
    };
};