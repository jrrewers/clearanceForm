'use strict';
module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let system_admin_schema = new Schema({
        username: String,
        password: String,
        name: {type: String, required: 'name is required'},
        mail: {type: String, match: /@/, lowercase: true, unique: true, required: 'mail is required'},
        group: {type: String, default: 'system_admins'}
    });

    mongoose.model('System_admin', system_admin_schema);
};
