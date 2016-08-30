'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

require('babel-polyfill');
var mongoose = require('mongoose');

var express = require('express');
var app = express();

var db = require('./model/db')(mongoose);

var passport = require('passport');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

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
//const user1 = request.agent();

require('./middleware/authorization')(app, passport, mongoose);
require('./routes/common')(app, passport);
require('./routes/employee')(app, passport, mongoose);

app.listen(3000);

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
process.on('unhandledRejection', function (reason, p) {
    console.log("Unhandled Rejection at: ", p, " reason: ", reason);
    // application specific logging, throwing an error, or other logic here
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUNBLFFBQVEsZ0JBQVI7QUFDQSxJQUFNLFdBQVcsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQUksVUFBVSxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUksTUFBTSxTQUFWOztBQUVBLElBQUksS0FBSyxRQUFRLFlBQVIsRUFBc0IsUUFBdEIsQ0FBVDs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFJLGVBQWUsUUFBUSxlQUFSLENBQW5CO0FBQ0EsSUFBSSxhQUFlLFFBQVEsYUFBUixDQUFuQjtBQUNBLElBQUksVUFBZSxRQUFRLGlCQUFSLENBQW5COztBQUVBLElBQUksR0FBSixDQUFRLFNBQVIsRUFBbUIsUUFBUSxNQUFSLENBQWUsUUFBZixDQUFuQjtBQUNBLElBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsS0FBdkI7QUFDQSxJQUFJLEdBQUosQ0FBUSxPQUFPLEtBQVAsQ0FBUjtBQUNBLElBQUksR0FBSixDQUFRLGNBQVI7QUFDQSxJQUFJLEdBQUosQ0FBUSxXQUFXLFVBQVgsQ0FBc0IsRUFBQyxVQUFVLElBQVgsRUFBdEIsQ0FBUjtBQUNBLElBQUksR0FBSixDQUFRLFdBQVcsSUFBWCxFQUFSO0FBQ0EsSUFBSSxHQUFKLENBQVEsUUFBUTtBQUNaLFlBQVEsaUJBREk7QUFFWixZQUFRLElBRkk7QUFHWix1QkFBbUI7QUFIUCxDQUFSLENBQVI7QUFLQSxJQUFJLEdBQUosQ0FBUSxTQUFTLFVBQVQsRUFBUjtBQUNBLElBQUksR0FBSixDQUFRLFNBQVMsT0FBVCxFQUFSO0FBQ0EsSUFBSSxHQUFKLENBQVEsUUFBUSxlQUFSLEdBQVI7O0FBRUEsSUFBTSxVQUFVLFFBQVEsWUFBUixDQUFoQjtBQUNBOztBQUVBLFFBQVEsNEJBQVIsRUFBc0MsR0FBdEMsRUFBMkMsUUFBM0MsRUFBcUQsUUFBckQ7QUFDQSxRQUFRLGlCQUFSLEVBQTJCLEdBQTNCLEVBQWdDLFFBQWhDO0FBQ0EsUUFBUSxtQkFBUixFQUE2QixHQUE3QixFQUFrQyxRQUFsQyxFQUE0QyxRQUE1Qzs7QUFHQSxJQUFJLE1BQUosQ0FBVyxJQUFYOztBQUVBOzs7Ozs7O0FBUUE7OztBQUdBO0FBQUEseURBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBLGFBQWdCLFFBQWhCO0FBQUE7QUFBQTs7QUFBQSxXQUFnQixRQUFoQjtBQUFBOztBQVNBOzs7Ozs7QUFPQSxPQUFPLE9BQVAsQ0FBZSxHQUFmLEdBQXFCLEdBQXJCO0FBQ0EsUUFBUSxFQUFSLENBQVcsb0JBQVgsRUFBaUMsVUFBUyxNQUFULEVBQWlCLENBQWpCLEVBQW9CO0FBQ2pELFlBQVEsR0FBUixDQUFZLDBCQUFaLEVBQXdDLENBQXhDLEVBQTJDLFdBQTNDLEVBQXdELE1BQXhEO0FBQ0E7QUFDSCxDQUhEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiJzcmMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbnJlcXVpcmUoJ2JhYmVsLXBvbHlmaWxsJyk7XHJcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxubGV0IGRiID0gcmVxdWlyZSgnLi9tb2RlbC9kYicpKG1vbmdvb3NlKTtcclxuXHJcbmxldCBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XHJcbmxldCBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKTtcclxubGV0IGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcclxubGV0IGJvZHlQYXJzZXIgICA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XHJcbmxldCBzZXNzaW9uICAgICAgPSByZXF1aXJlKCdleHByZXNzLXNlc3Npb24nKTtcclxuXHJcbmFwcC51c2UoJy9wdWJsaWMnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpO1xyXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKTtcclxuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2Uoc2Vzc2lvbih7XHJcbiAgICBzZWNyZXQ6ICd6YcW8w7PFgsSHZ8SZxZtsxIVqYcW6xYQnLFxyXG4gICAgcmVzYXZlOiB0cnVlLFxyXG4gICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWVcclxufSkpO1xyXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcclxuYXBwLnVzZShyZXF1aXJlKCdjb25uZWN0LWZsYXNoJykoKSk7XHJcblxyXG5jb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xyXG4vL2NvbnN0IHVzZXIxID0gcmVxdWVzdC5hZ2VudCgpO1xyXG5cclxucmVxdWlyZSgnLi9taWRkbGV3YXJlL2F1dGhvcml6YXRpb24nKShhcHAsIHBhc3Nwb3J0LCBtb25nb29zZSk7XHJcbnJlcXVpcmUoJy4vcm91dGVzL2NvbW1vbicpKGFwcCwgcGFzc3BvcnQpO1xyXG5yZXF1aXJlKCcuL3JvdXRlcy9lbXBsb3llZScpKGFwcCwgcGFzc3BvcnQsIG1vbmdvb3NlKTtcclxuXHJcblxyXG5hcHAubGlzdGVuKDMwMDApO1xyXG5cclxuLypjb25zdCB1bmhhc2hlZFBhc3N3b3JkID0gJ2hhc2xvYSc7XHJcbmNvbnN0IHBhc3NlZCA9IHtcclxuICAgIHVzZXJuYW1lOiAnMTIzNDU2NycsXHJcbiAgICBwYXNzd29yZDogYmNyeXB0Lmhhc2hTeW5jKHVuaGFzaGVkUGFzc3dvcmQpLFxyXG4gICAgZ3JvdXA6ICdjbGVhcmFuY2VfdW5pdF9tYW5hZ2VycydcclxufTsqL1xyXG5cclxuXHJcbi8qbGV0IHRlc3RfbW9kZWwgPSBtb25nb29zZS5tb2RlbCgndGVzdCcpO1xyXG5sZXQgdGVzdF9tb2RlbDIgPSBtb25nb29zZS5tb2RlbCgndGVzdDInKTsqL1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uIHNhdmVVc2VyKCl7XHJcbiAgICAvKnRyeSB7XHJcbiAgICAgICAgbGV0IHNhdmVkID0gYXdhaXQgbmV3IHRlc3RfbW9kZWwyKHBhc3NlZCkuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNhdmVkKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfSovXHJcbn0pKCk7XHJcblxyXG4vKnVzZXIxXHJcbiAgICAucG9zdCgnaHR0cDovLzEyNy4wLjAuMTozMDAwL2xvZ2luJylcclxuICAgIC5zZW5kKHt1c2VybmFtZTogJzEyMzQ1NicsIHBhc3N3b3JkOiAnaGFzbG8nfSlcclxuICAgIC5lbmQoZnVuY3Rpb24gKGVyciwgcmVzKSB7XHJcbiAgICB9KTsqL1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmFwcCA9IGFwcDtcclxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZnVuY3Rpb24ocmVhc29uLCBwKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVuaGFuZGxlZCBSZWplY3Rpb24gYXQ6IFwiLCBwLCBcIiByZWFzb246IFwiLCByZWFzb24pO1xyXG4gICAgLy8gYXBwbGljYXRpb24gc3BlY2lmaWMgbG9nZ2luZywgdGhyb3dpbmcgYW4gZXJyb3IsIG9yIG90aGVyIGxvZ2ljIGhlcmVcclxufSk7Il19