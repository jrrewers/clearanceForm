'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let clearance_unit_schema = new Schema({
    name: String
});

exports.clearance_unit_model = mongoose.model('clearance_unit', clearance_unit_schema);
