'use strict';
module.exports = function (mongoose) {
    const autoIncrement = require('mongoose-auto-increment');
    autoIncrement.initialize(mongoose.connection);
    require('./Clearance_unit')(mongoose, autoIncrement);
    require('./Clearance_unit_manager')(mongoose, autoIncrement);
    require('./Employee')(mongoose, autoIncrement);
    require('./Review')(mongoose, autoIncrement);
    require('./System_admin')(mongoose, autoIncrement);
    require('./Verfication_unit')(mongoose, autoIncrement);
    require('./Verification_unit_manager')(mongoose, autoIncrement);
    require('./Mock_Models')(mongoose, autoIncrement);

    let db = {
        development: 'mongodb://localhost:27017/clearanceForm',
        test: 'mongodb://localhost:27017/clearanceForm-test'
    };

    let MongoDB = mongoose.connect(db.test).connection;
    MongoDB.on('error', function(err) { console.log(err.message); });
    MongoDB.once('open', function() {
        console.log('mongodb connection open');
    });

};  