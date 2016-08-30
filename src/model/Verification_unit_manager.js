'use strict';

module.exports = function (mongoose, autoIncrement) {
    let Schema = mongoose.Schema;
    let verification_unit_managers_schema = new Schema({
        _id: Number,
        verification_unit_id: {type: Number, ref: 'Verification_unit'},
        username: String,
        password: String,
        name: String,
        mail: {type: String, match: /@/, lowercase: true},
        group: {type: String, enum: ['verification_unit_managers', 'verification_unit_admins']}
    });

    mongoose.model('Verification_unit_manager', verification_unit_managers_schema);
};