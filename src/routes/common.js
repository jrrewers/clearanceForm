'use strict';
const babelPolyfill = require('babel-polyfill');
const mongoose = require('mongoose');

let express = require('express');
let app = express();

let db = require('./model/db');

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

let server = app.listen(3000);

app.post('/login', function (req, res) {
    console.log(1);
    passport.authenticate('local', function (err, user, info) {
        if (err) {res.send(err)}
        if (user) {res.send(user)}
    })
});

/*
modules.exports.commonRoutes = {
    login: app.post('/login', function (req, res) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {res.send(err)}
            if (user) {res.send(user)}
        })
    })
};*/
