'use strict';

module.exports = function (app, passport, mongoose) {
    const pauth = passport.authenticate.bind(passport);
    const Verification_unit_manager = mongoose.model('Verification_unit_manager');
    const Clearance_unit_manager = mongoose.model('Clearance_unit_manager');
    const Employee = mongoose.model('Employee');
    const System_admin = mongoose.model('System_admin');
    app.post('/login', pauth('local'), function (req, res) {
        res.send(req.user);
    });

    app.post('/registerUser', async function (req, res) {
        let savedUser;

        switch (req.body.userToSave.group) {
            case 'verification_unit_admins':
                savedUser = await Verification_unit_manager(req.body.userToSave).save();
                break;
            case 'verification_unit_managers':
                savedUser = await Verification_unit_manager(req.body.userToSave).save();
                break;
            case 'clearance_unit_admins':
                savedUser = await Clearance_unit_manager(req.body.userToSave).save();
                break;
            case 'clearance_unit_managers':
                savedUser = await Clearance_unit_manager(req.body.userToSave).save();
                break;
            case 'employees':
                savedUser = await Employee(req.body.userToSave).save();
                break;
            case 'system_admins':
                savedUser = await System_admin(req.body.userToSave).save();
                break;
        }
        res.send(savedUser);
    });
};


