/**
 * Created by Jarek on 2016-07-31.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let test_schema = new Schema({
    username: String,
    password: String,
    group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
});
mongoose.model('test', test_schema);

let test_schema2 = new Schema({
    username: String,
    password: String,
    group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
});
let test_model2 = mongoose.model('test2', test_schema2);

/*module.exports = {
    test_model: test_model,
    test_model2: test_model2
};*/
