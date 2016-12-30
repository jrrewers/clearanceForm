'use strict';

module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let verification_unit_managers_schema = new Schema({
        verification_unit_id: {type: Schema.Types.ObjectId, ref: 'Verification_unit'},
        username: String,
        password: String,
        name: {type: String, required: 'name is required'},
        mail: {type: String, match: /@/, lowercase: true, unique: true, required: 'mail is required'},
        group: {type: String, enum: ['verification_unit_managers', 'verification_unit_admins']}
    });

    mongoose.model('Verification_unit_manager', verification_unit_managers_schema);
};