'use strict';

module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let review_schema = new Schema({
        clearance_unit_id: {type: Number, ref: 'Clearance_unit', required: true},
        employee_id: {type: Number, ref: 'Employee', required: true},
        requested_timestamp: {type: Date, required: true},
        is_waiting: Boolean,
        clearance_unit_manager_id: {type: Number, ref: 'Clearance_unit_manager'},
        note: String,
        review_timestamp: Date,
        review: Boolean,
        is_locked: Boolean,
        locked_timestamp: Date,
        locked_by_cu_manager_id: {type: Number, ref: 'Clearance_unit_manager'},
    });

    mongoose.model('Review', review_schema);
};

