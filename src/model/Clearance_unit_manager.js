'use strict';
module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let clearance_unit_managers_schema = new Schema({
        _id: Number,
        clearance_unit_id: {type: Number, ref: 'Clearance_unit'},
        username: String,
        password: String,
        name: String,
        mail: {type: String, match: /@/, lowercase: true},
        group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
});

    mongoose.model('Clearance_unit_manager', clearance_unit_managers_schema);
};