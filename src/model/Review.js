'use strict';

module.exports = function (mongoose) {
    let Schema = mongoose.Schema;
    let review_schema = new Schema({
        clearance_unit_id: {type: Schema.Types.ObjectId, ref: 'Clearance_unit', required: true},
        employee_id: {type: Schema.Types.ObjectId, ref: 'Employee', required: true},
        requested_timestamp: {type: Date, required: true},
        is_waiting: {type: Boolean, default: true},
        clearance_unit_manager_id: {type: Number, ref: 'Clearance_unit_manager'},
        note: String,
        review_timestamp: Date,
        review: Boolean,
        is_locked: Boolean,
        locked_timestamp: Date,
        locked_by_cu_manager_id: {type: Schema.Types.ObjectId, ref: 'Clearance_unit_manager'},
    });

    //does this review block from sending clearance request for review clearance unit?
    review_schema.virtual('isBlocking')
        .get(function() {return this.is_waiting || (!this.is_waiting && this.review)});

    mongoose.model('Review', review_schema);
};

