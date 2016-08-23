'use strict';

module.exports = function (mongoose) {

    var db = {
        development: 'mongodb://localhost:27017/clearanceForm',
        test: 'mongodb://localhost:27017/clearanceForm-test'
    };

    if (mongoose.connection.readyState === 0) {
        let MongoDB = mongoose.connect(db.test).connection;
        MongoDB.on('error', function (err) {
            console.log(err.message);
        });
        MongoDB.once('open', function () {
            console.log("mongodb connection open");
        });
    }
};
//# sourceMappingURL=db.js.map