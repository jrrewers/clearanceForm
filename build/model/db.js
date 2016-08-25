'use strict';

module.exports = function (mongoose) {

    require('./Clearance_unit')(mongoose);
    require('./Clearance_unit_manager')(mongoose);
    require('./Employee')(mongoose);
    require('./Review')(mongoose);
    require('./System_admin')(mongoose);
    require('./Verfication_unit')(mongoose);
    require('./Verification_unit_manager')(mongoose);
    require('./Mock_Models')(mongoose);

    var db = {
        development: 'mongodb://localhost:27017/clearanceForm',
        test: 'mongodb://localhost:27017/clearanceForm-test'
    };

    var MongoDB = mongoose.connect(db.test).connection;
    MongoDB.on('error', function (err) {
        console.log(err.message);
    });
    MongoDB.once('open', function () {
        console.log("mongodb connection open");
    });
};
//# sourceMappingURL=db.js.map