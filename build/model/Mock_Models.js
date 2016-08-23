'use strict';

/**
 * Created by Jarek on 2016-07-31.
 */
module.exports = function (mongoose) {
    var Schema = mongoose.Schema;
    var test_schema = new Schema({
        username: String,
        password: String,
        group: { type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins'] }
    });
    mongoose.model('test', test_schema);

    var test_schema2 = new Schema({
        username: String,
        password: String,
        group: { type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins'] }
    });
    var test_model2 = mongoose.model('test2', test_schema2);
};
//# sourceMappingURL=Mock_Models.js.map