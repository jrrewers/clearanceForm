'use strict';

module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let employee_schema = new Schema({
        verification_unit_id: {type: Schema.Types.ObjectId, ref: 'Verification_unit'},
        username: String,
        password: String,
        name: String,
        mail: {type: String, match: /@/, lowercase: true},
        group: {type: String, default: 'employees'},
        is_verified: {type: Boolean, default: false}
    });

    mongoose.model('Employee', employee_schema);
};