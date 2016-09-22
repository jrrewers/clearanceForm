'use strict';

module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let verification_unit_schema = new Schema({
        name: String
    });

    mongoose.model('Verification_unit', verification_unit_schema);
};

