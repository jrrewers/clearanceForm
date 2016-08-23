'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var clearance_unit_schema = new Schema({
    name: String
});

exports.clearance_unit_model = mongoose.model('clearance_unit', clearance_unit_schema);
//# sourceMappingURL=Clearance_unit.js.map