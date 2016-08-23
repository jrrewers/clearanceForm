'use strict';
const babelPolyfill = require('babel-polyfill');
const mongoose = require('mongoose');

let express = require('express');
let app = express();

let db = require('./model/db')(mongoose);

let passport = require('passport');
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');
let session      = require('express-session');

const bcrypt = require('bcryptjs');

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

const request = require('superagent');
const user1 = request.agent();

require('./middleware/authorization')(app, passport, mongoose);
require('./routes/common')(app, passport);


let server = app.listen(3000);

/*const unhashedPassword = 'hasloa';
const passed = {
    username: '1234567',
    password: bcrypt.hashSync(unhashedPassword),
    group: 'clearance_unit_managers'
};*/


/*let test_model = mongoose.model('test');
let test_model2 = mongoose.model('test2');*/

(async function saveUser(){
    /*try {
        let saved = await new test_model2(passed).save();
        console.log(saved);
    } catch(e) {
        console.log(e);
    }*/
})();

/*user1
    .post('http://127.0.0.1:3000/login')
    .send({username: '123456', password: 'haslo'})
    .end(function (err, res) {
    });*/


module.exports.app = app;