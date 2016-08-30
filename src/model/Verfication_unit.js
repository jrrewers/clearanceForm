'use strict';

module.exports = function (mongoose, autoIncrement) {
    let Schema = mongoose.Schema;
    let verification_unit_schema = new Schema({
        _id: Number,
        name: String
    });

    mongoose.model('Verification_unit', verification_unit_schema);
};

