'use strict';

module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let review_schema = new Schema({
        clearance_unit_id: {type: Schema.Types.ObjectId, ref: 'Clearance_unit'},
        employee_id: {type: Schema.Types.ObjectId, ref: employee},
        requested_timestamp: Date,
        is_waiting: Boolean,
        clearance_unit_manager_id: {type: Schema.Types.ObjectId, ref: 'Clearance_unit_manager'},
        note: String,
        review_timestamp: Date,
        review: Boolean,
        is_locked: Boolean,
        locked_timestamp: Date,
        locked_by_cu_manager_id: {type: Schema.Types.ObjectId, ref: 'Clearance_unit_manager'},
    });

    mongoose.model('Review', review_schema);
};

