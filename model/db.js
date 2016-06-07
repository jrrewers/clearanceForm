'use strict';
let mongoose = require('mongoose');
let db = {
    development: 'mongodb://localhost:27017/clearanceForm',
    test: 'mongodb://localhost:27017/clearanceForm-test'
};

let MongoDB = mongoose.connect('mongodb://localhost:27017/clearanceForm').connection;
MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
    console.log("mongodb connection open");
});