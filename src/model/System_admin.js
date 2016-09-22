'use strict';
module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let system_admin_schema = new Schema({
        username: String,
        password: String,
        name: String,
        mail: {type: String, match: /@/, lowercase: true},
        group: {type: String, default: 'system_admins'}
    });

    mongoose.model('System_admin', system_admin_schema);
};
