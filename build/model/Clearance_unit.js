'use strict';

module.exports = function (mongoose) {
    var Schema = mongoose.Schema;
    var clearance_unit_schema = new Schema({
        name: String
    });

    mongoose.model('Clearance_unit', clearance_unit_schema);
};
//# sourceMappingURL=Clearance_unit.js.map