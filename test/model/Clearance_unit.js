'use strict';

let util = require('../util');
let clearance_unit = require('../../model/Clearance_unit').clearance_unit_model;

describe('Clearance Unit Model', function () {
    it('should add new Clearance Unit', function *() {
       let passed = {name: 'Test Clearance Unit'};

       let clearanceUnit = yield new clearance_unit(passed).save();
       clearanceUnit.name.should.equal(passed.name);
    });
});