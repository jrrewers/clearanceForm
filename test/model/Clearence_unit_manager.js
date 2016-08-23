'use strict';

let util = require('../util');
let clearance_unit_manager = require('../../build/model/Clearance_unit_manager');

describe('Clearance Unit Manager', function () {
    it('adds new Clearance Unit Manager', function *() {
        let unhashedPassword = Math.random().toString(36);
        let passed = {
            username: 'Test Clearance Unit',
            group: 'clearance_unit_managers',
            password: bcrypt.hashSync(unhashedPassword),
            name: 'Some name',
            mail: 'mail@mail.com'
        };

        let clearanceUnitManager = yield new clearance_unit_manager(passed).save();
        clearanceUnitManager.username.should.equal(passed.username);
        clearanceUnitManager.group.should.equal(passed.group);
        bcrypt.hashSync(unhashedPassword, clearanceUnitManager.password).should.be.true;
        clearanceUnitManager.name.should.equal(passed.name);

    });

    it('changes password correctly', function *() {
        let oldPassword = Math.random().toString(36);
        let newPassword = Math.random().toString(36);
        let passed = {
            username: 'Test Clearance Unit',
            group: 'clearance_unit_managers',
            password: bcrypt.hashSync(oldPassword),
            name: 'Some name',
            mail: 'mail@mail.com'
        };

        let clearanceUnitManagerSaved = yield new clearance_unit_manager(passed).save();
        let passwordChangeResult = yield clearance_unit_manager.changePassword(bcrypt.hashSync(newPassword)).exec();
        let clearanceUnitManagerFound = yield clearance_unit_manager.findById(clearance_unit_manager._id);

        passwordChangeResult.should.be.true;
        bcrypt.hashSync(newPassword, clearanceUnitManagerFound.password).should.be.true;
    });

    it('gets list of watiting clearance requests', function *() {
        /*TODO: test for gets list of watiting clearance requests*/
    });

    it('resolves clearance request', function *() {
        /*TODO: test for resolving clearance requests - all possible cases*/
    });

    it('resets password correctly', function *() {
        /*TODO: test for password reset - method should return new password? - move to login tests*/
    });

    it('registers new clearance unit manager', function *() {
        /*TODO: test for new clearance unit manager - only if admin - move to login tests*/
    });



});