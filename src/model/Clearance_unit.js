'use strict';

module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let clearance_unit_schema = new Schema({
        name: String
    });

    mongoose.model('Clearance_unit', clearance_unit_schema);
};

