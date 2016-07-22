'use strict';
const babelPolyfill = require('babel-polyfill');
const mongoose = require('mongoose');

let express = require('express');
let app = express();

let db = require('./model/db');

let passport = require('passport');
const localStrategy = require('passport-local').Strategy;
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

passport.use('local', new localStrategy(
    async function (username, password, done) {
        try {
            console.log('entered');
            let foundIn_test_model = await test_model.findOne({username: username}).exec();
            if (!!foundIn_test_model && (bcrypt.compareSync(password, foundIn_test_model.password))) {
                return done(null, foundIn_test_model)
            }
            let foundIn_test_model2 = await test_model2.findOne({username: username}).exec();
            if (!!foundIn_test_model2 && (bcrypt.compareSync(password, foundIn_test_model2.password))) {
                return done(null, foundIn_test_model2)
            }
            return done(null, false)
        } catch (error) {
            return done(error);
        }
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    test_model.findById(id, function(err, user) {
        done(err, user);
    });
});


let server = app.listen(3000);

let Schema = mongoose.Schema;
let test_schema = new Schema({
    username: String,
    password: String,
    group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
});
let test_model = mongoose.model('test', test_schema);

let test_schema2 = new Schema({
    username: String,
    password: String,
    group: {type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins']}
});
let test_model2 = mongoose.model('test2', test_schema2);

const unhashedPassword = 'haslo';
const passed = {
    username: '123456',
    password: bcrypt.hashSync(unhashedPassword),
    group: 'clearance_unit_managersaa'
};

if (mongoose.connection.readyState === 0) {
    mongoose.connect('mongodb://localhost:27017/clearanceForm-test', function () {
        console.log("mongodb test connection open");
    });
}

(async function saveUser(){
    /*try {
        let saved = await new test_model2(passed).save();
        console.log(saved);
    } catch(e) {
        console.log(e);
    }*/
})();

user1
    .post('http://127.0.0.1:3000/login')
    .send({username: '123456', password: 'hasloa'})
    .end(function (err, res) {
        console.log(res);
    });

passport.authenticate('local', function (req, res) {
    console.log('ok');
});

app.post('/login', passport.authenticate('local'),
    function (req, res) {
        res.send(req.user);
    });


