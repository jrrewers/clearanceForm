'use strict';

module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let employee_schema = new Schema({
        verification_unit_id: {
            type: Schema.Types.ObjectId,
            ref: 'Verification_unit',
            required: 'an employee must be assigned to verification unit'
        },
        username: String,
        password: String,
        name: {type: String, required: 'name is required'},
        mail: {type: String, match: /@/, lowercase: true, unique: true, required: 'mail is required'},
        notification: {type: Boolean, default: false},
        group: {type: String, default: 'employees'},
        is_verified: {type: Boolean, default: false}
    });

    mongoose.model('Employee', employee_schema);
};