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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUNBLElBQU0sZ0JBQWdCLFFBQVEsZ0JBQVIsQ0FBdEI7QUFDQSxJQUFNLFdBQVcsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQUksVUFBVSxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUksTUFBTSxTQUFWOztBQUVBLElBQUksS0FBSyxRQUFRLFlBQVIsRUFBc0IsUUFBdEIsQ0FBVDs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFJLGVBQWUsUUFBUSxlQUFSLENBQW5CO0FBQ0EsSUFBSSxhQUFlLFFBQVEsYUFBUixDQUFuQjtBQUNBLElBQUksVUFBZSxRQUFRLGlCQUFSLENBQW5COztBQUVBLElBQU0sU0FBUyxRQUFRLFVBQVIsQ0FBZjs7QUFFQSxJQUFJLEdBQUosQ0FBUSxTQUFSLEVBQW1CLFFBQVEsTUFBUixDQUFlLFFBQWYsQ0FBbkI7QUFDQSxJQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLEtBQXZCO0FBQ0EsSUFBSSxHQUFKLENBQVEsT0FBTyxLQUFQLENBQVI7QUFDQSxJQUFJLEdBQUosQ0FBUSxjQUFSO0FBQ0EsSUFBSSxHQUFKLENBQVEsV0FBVyxVQUFYLENBQXNCLEVBQUMsVUFBVSxJQUFYLEVBQXRCLENBQVI7QUFDQSxJQUFJLEdBQUosQ0FBUSxXQUFXLElBQVgsRUFBUjtBQUNBLElBQUksR0FBSixDQUFRLFFBQVE7QUFDWixZQUFRLGlCQURJO0FBRVosWUFBUSxJQUZJO0FBR1osdUJBQW1CO0FBSFAsQ0FBUixDQUFSO0FBS0EsSUFBSSxHQUFKLENBQVEsU0FBUyxVQUFULEVBQVI7QUFDQSxJQUFJLEdBQUosQ0FBUSxTQUFTLE9BQVQsRUFBUjtBQUNBLElBQUksR0FBSixDQUFRLFFBQVEsZUFBUixHQUFSOztBQUVBLElBQU0sVUFBVSxRQUFRLFlBQVIsQ0FBaEI7QUFDQSxJQUFNLFFBQVEsUUFBUSxLQUFSLEVBQWQ7O0FBRUEsUUFBUSw0QkFBUixFQUFzQyxHQUF0QyxFQUEyQyxRQUEzQyxFQUFxRCxRQUFyRDtBQUNBLFFBQVEsaUJBQVIsRUFBMkIsR0FBM0IsRUFBZ0MsUUFBaEM7QUFDQSxRQUFRLG1CQUFSLEVBQTZCLEdBQTdCLEVBQWtDLFFBQWxDLEVBQTRDLFFBQTVDOztBQUdBLElBQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxJQUFYLENBQWI7O0FBRUE7Ozs7Ozs7QUFRQTs7O0FBR0E7QUFBQSx5REFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUEsYUFBZ0IsUUFBaEI7QUFBQTtBQUFBOztBQUFBLFdBQWdCLFFBQWhCO0FBQUE7O0FBU0E7Ozs7OztBQU9BLE9BQU8sT0FBUCxDQUFlLEdBQWYsR0FBcUIsR0FBckIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6InNyYyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuY29uc3QgYmFiZWxQb2x5ZmlsbCA9IHJlcXVpcmUoJ2JhYmVsLXBvbHlmaWxsJyk7XHJcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxubGV0IGRiID0gcmVxdWlyZSgnLi9tb2RlbC9kYicpKG1vbmdvb3NlKTtcclxuXHJcbmxldCBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XHJcbmxldCBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKTtcclxubGV0IGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcclxubGV0IGJvZHlQYXJzZXIgICA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XHJcbmxldCBzZXNzaW9uICAgICAgPSByZXF1aXJlKCdleHByZXNzLXNlc3Npb24nKTtcclxuXHJcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdGpzJyk7XHJcblxyXG5hcHAudXNlKCcvcHVibGljJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XHJcbmFwcC51c2UobW9yZ2FuKCdkZXYnKSk7XHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKHNlc3Npb24oe1xyXG4gICAgc2VjcmV0OiAnemHFvMOzxYLEh2fEmcWbbMSFamHFusWEJyxcclxuICAgIHJlc2F2ZTogdHJ1ZSxcclxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlXHJcbn0pKTtcclxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XHJcbmFwcC51c2UocmVxdWlyZSgnY29ubmVjdC1mbGFzaCcpKCkpO1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcclxuY29uc3QgdXNlcjEgPSByZXF1ZXN0LmFnZW50KCk7XHJcblxyXG5yZXF1aXJlKCcuL21pZGRsZXdhcmUvYXV0aG9yaXphdGlvbicpKGFwcCwgcGFzc3BvcnQsIG1vbmdvb3NlKTtcclxucmVxdWlyZSgnLi9yb3V0ZXMvY29tbW9uJykoYXBwLCBwYXNzcG9ydCk7XHJcbnJlcXVpcmUoJy4vcm91dGVzL2VtcGxveWVlJykoYXBwLCBwYXNzcG9ydCwgbW9uZ29vc2UpO1xyXG5cclxuXHJcbmxldCBzZXJ2ZXIgPSBhcHAubGlzdGVuKDMwMDApO1xyXG5cclxuLypjb25zdCB1bmhhc2hlZFBhc3N3b3JkID0gJ2hhc2xvYSc7XHJcbmNvbnN0IHBhc3NlZCA9IHtcclxuICAgIHVzZXJuYW1lOiAnMTIzNDU2NycsXHJcbiAgICBwYXNzd29yZDogYmNyeXB0Lmhhc2hTeW5jKHVuaGFzaGVkUGFzc3dvcmQpLFxyXG4gICAgZ3JvdXA6ICdjbGVhcmFuY2VfdW5pdF9tYW5hZ2VycydcclxufTsqL1xyXG5cclxuXHJcbi8qbGV0IHRlc3RfbW9kZWwgPSBtb25nb29zZS5tb2RlbCgndGVzdCcpO1xyXG5sZXQgdGVzdF9tb2RlbDIgPSBtb25nb29zZS5tb2RlbCgndGVzdDInKTsqL1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uIHNhdmVVc2VyKCl7XHJcbiAgICAvKnRyeSB7XHJcbiAgICAgICAgbGV0IHNhdmVkID0gYXdhaXQgbmV3IHRlc3RfbW9kZWwyKHBhc3NlZCkuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNhdmVkKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfSovXHJcbn0pKCk7XHJcblxyXG4vKnVzZXIxXHJcbiAgICAucG9zdCgnaHR0cDovLzEyNy4wLjAuMTozMDAwL2xvZ2luJylcclxuICAgIC5zZW5kKHt1c2VybmFtZTogJzEyMzQ1NicsIHBhc3N3b3JkOiAnaGFzbG8nfSlcclxuICAgIC5lbmQoZnVuY3Rpb24gKGVyciwgcmVzKSB7XHJcbiAgICB9KTsqL1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmFwcCA9IGFwcDtcclxuIl19