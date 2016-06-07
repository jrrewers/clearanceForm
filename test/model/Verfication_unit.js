'use strict';

let util = require('../util');
let verification_unit = require('../../model/Verfication_unit').verification_unit_model;

describe('Verification Unit Model', function () {
    it('should add new Verficiation Unit', function *() {
        let passed = {name: 'Test Verification Unit'};
    
        let verificationUnit = yield new verification_unit(passed).save();
        verificationUnit.name.should.equal(passed.name);
    });
});