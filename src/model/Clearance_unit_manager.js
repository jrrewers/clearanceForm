'use strict';
module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let clearance_unit_managers_schema = new Schema({
        clearance_unit_id: {type: Schema.Types.ObjectId, ref: 'Clearance_unit', required: 'Clearance Unit ID is required to save CU manager/Admin'},
        username: String,
        password: String,
        name: {type: String, required: 'name is required'},
        mail: {type: String, match: /@/, lowercase: true, required: 'mail is required', unique: true},
        group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
});

    mongoose.model('Clearance_unit_manager', clearance_unit_managers_schema);
};