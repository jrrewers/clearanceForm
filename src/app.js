'use strict';
require('babel-polyfill');
const mongoose = require('mongoose');

let express = require('express');
let app = express();

let db = require('./model/db')(mongoose);

let passport = require('passport');
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');
let session      = require('express-session');

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'zażółćgęśląjaźń',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('connect-flash')());

require('./middleware/authorization')(app, passport, mongoose);
require('./routes/common')(app, passport, mongoose);
require('./routes/review')(app, passport, mongoose);


app.listen(3000);


(async function saveUser(){
    /*const Clearance_unit = mongoose.model('Clearance_unit');

    try {
        let saved = await new Clearance_unit({_id: 5, name: 'Biblioteka Zbiorów Specjalnych'}).save();
        console.log(saved);
    } catch(e) {
        console.log(e);
    }*/
})();



module.exports.app = app;
process.on('unhandledRejection', function(reason, p) {
    console.log("Unhandled Rejection at: ", p, " reason: ", reason);
    // application specific logging, throwing an error, or other logic here
});
