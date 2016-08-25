'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var babelPolyfill = require('babel-polyfill');
var mongoose = require('mongoose');

var express = require('express');
var app = express();

var db = require('./model/db')(mongoose);

var passport = require('passport');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var bcrypt = require('bcryptjs');

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'zażółćgęśląjaźń',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('connect-flash')());

var request = require('superagent');
var user1 = request.agent();

require('./middleware/authorization')(app, passport, mongoose);
require('./routes/common')(app, passport);
require('./routes/employee')(app, passport, mongoose);

var server = app.listen(3000);

/*const unhashedPassword = 'hasloa';
const passed = {
    username: '1234567',
    password: bcrypt.hashSync(unhashedPassword),
    group: 'clearance_unit_managers'
};*/

/*let test_model = mongoose.model('test');
let test_model2 = mongoose.model('test2');*/

(function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function saveUser() {
        return _ref.apply(this, arguments);
    }

    return saveUser;
})()();

/*user1
    .post('http://127.0.0.1:3000/login')
    .send({username: '123456', password: 'haslo'})
    .end(function (err, res) {
    });*/

module.exports.app = app;
//# sourceMappingURL=app.js.map