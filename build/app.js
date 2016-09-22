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

require('./middleware/authorization')(app, passport, mongoose);
require('./routes/common')(app, passport, mongoose);
require('./routes/review')(app, passport, mongoose);

app.listen(3000);

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

module.exports.app = app;
process.on('unhandledRejection', function (reason, p) {
    console.log("Unhandled Rejection at: ", p, " reason: ", reason);
    // application specific logging, throwing an error, or other logic here
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUNBLFFBQVEsZ0JBQVI7QUFDQSxJQUFNLFdBQVcsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQUksVUFBVSxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUksTUFBTSxTQUFWOztBQUVBLElBQUksS0FBSyxRQUFRLFlBQVIsRUFBc0IsUUFBdEIsQ0FBVDs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFJLGVBQWUsUUFBUSxlQUFSLENBQW5CO0FBQ0EsSUFBSSxhQUFlLFFBQVEsYUFBUixDQUFuQjtBQUNBLElBQUksVUFBZSxRQUFRLGlCQUFSLENBQW5COztBQUVBLElBQUksR0FBSixDQUFRLFNBQVIsRUFBbUIsUUFBUSxNQUFSLENBQWUsUUFBZixDQUFuQjtBQUNBLElBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsS0FBdkI7QUFDQSxJQUFJLEdBQUosQ0FBUSxPQUFPLEtBQVAsQ0FBUjtBQUNBLElBQUksR0FBSixDQUFRLGNBQVI7QUFDQSxJQUFJLEdBQUosQ0FBUSxXQUFXLFVBQVgsQ0FBc0IsRUFBQyxVQUFVLElBQVgsRUFBdEIsQ0FBUjtBQUNBLElBQUksR0FBSixDQUFRLFdBQVcsSUFBWCxFQUFSO0FBQ0EsSUFBSSxHQUFKLENBQVEsUUFBUTtBQUNaLFlBQVEsaUJBREk7QUFFWixZQUFRLElBRkk7QUFHWix1QkFBbUI7QUFIUCxDQUFSLENBQVI7QUFLQSxJQUFJLEdBQUosQ0FBUSxTQUFTLFVBQVQsRUFBUjtBQUNBLElBQUksR0FBSixDQUFRLFNBQVMsT0FBVCxFQUFSO0FBQ0EsSUFBSSxHQUFKLENBQVEsUUFBUSxlQUFSLEdBQVI7O0FBRUEsUUFBUSw0QkFBUixFQUFzQyxHQUF0QyxFQUEyQyxRQUEzQyxFQUFxRCxRQUFyRDtBQUNBLFFBQVEsaUJBQVIsRUFBMkIsR0FBM0IsRUFBZ0MsUUFBaEMsRUFBMEMsUUFBMUM7QUFDQSxRQUFRLGlCQUFSLEVBQTJCLEdBQTNCLEVBQWdDLFFBQWhDLEVBQTBDLFFBQTFDOztBQUdBLElBQUksTUFBSixDQUFXLElBQVg7O0FBR0E7QUFBQSx5REFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUEsYUFBZ0IsUUFBaEI7QUFBQTtBQUFBOztBQUFBLFdBQWdCLFFBQWhCO0FBQUE7O0FBYUEsT0FBTyxPQUFQLENBQWUsR0FBZixHQUFxQixHQUFyQjtBQUNBLFFBQVEsRUFBUixDQUFXLG9CQUFYLEVBQWlDLFVBQVMsTUFBVCxFQUFpQixDQUFqQixFQUFvQjtBQUNqRCxZQUFRLEdBQVIsQ0FBWSwwQkFBWixFQUF3QyxDQUF4QyxFQUEyQyxXQUEzQyxFQUF3RCxNQUF4RDtBQUNBO0FBQ0gsQ0FIRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290Ijoic3JjIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5yZXF1aXJlKCdiYWJlbC1wb2x5ZmlsbCcpO1xyXG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxubGV0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmxldCBkYiA9IHJlcXVpcmUoJy4vbW9kZWwvZGInKShtb25nb29zZSk7XHJcblxyXG5sZXQgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xyXG5sZXQgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcbmxldCBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XHJcbmxldCBib2R5UGFyc2VyICAgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xyXG5sZXQgc2Vzc2lvbiAgICAgID0gcmVxdWlyZSgnZXhwcmVzcy1zZXNzaW9uJyk7XHJcblxyXG5hcHAudXNlKCcvcHVibGljJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XHJcbmFwcC51c2UobW9yZ2FuKCdkZXYnKSk7XHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKHNlc3Npb24oe1xyXG4gICAgc2VjcmV0OiAnemHFvMOzxYLEh2fEmcWbbMSFamHFusWEJyxcclxuICAgIHJlc2F2ZTogdHJ1ZSxcclxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlXHJcbn0pKTtcclxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XHJcbmFwcC51c2UocmVxdWlyZSgnY29ubmVjdC1mbGFzaCcpKCkpO1xyXG5cclxucmVxdWlyZSgnLi9taWRkbGV3YXJlL2F1dGhvcml6YXRpb24nKShhcHAsIHBhc3Nwb3J0LCBtb25nb29zZSk7XHJcbnJlcXVpcmUoJy4vcm91dGVzL2NvbW1vbicpKGFwcCwgcGFzc3BvcnQsIG1vbmdvb3NlKTtcclxucmVxdWlyZSgnLi9yb3V0ZXMvcmV2aWV3JykoYXBwLCBwYXNzcG9ydCwgbW9uZ29vc2UpO1xyXG5cclxuXHJcbmFwcC5saXN0ZW4oMzAwMCk7XHJcblxyXG5cclxuKGFzeW5jIGZ1bmN0aW9uIHNhdmVVc2VyKCl7XHJcbiAgICAvKmNvbnN0IENsZWFyYW5jZV91bml0ID0gbW9uZ29vc2UubW9kZWwoJ0NsZWFyYW5jZV91bml0Jyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgc2F2ZWQgPSBhd2FpdCBuZXcgQ2xlYXJhbmNlX3VuaXQoe19pZDogNSwgbmFtZTogJ0JpYmxpb3Rla2EgWmJpb3LDs3cgU3BlY2phbG55Y2gnfSkuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNhdmVkKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfSovXHJcbn0pKCk7XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmFwcCA9IGFwcDtcclxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZnVuY3Rpb24ocmVhc29uLCBwKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVuaGFuZGxlZCBSZWplY3Rpb24gYXQ6IFwiLCBwLCBcIiByZWFzb246IFwiLCByZWFzb24pO1xyXG4gICAgLy8gYXBwbGljYXRpb24gc3BlY2lmaWMgbG9nZ2luZywgdGhyb3dpbmcgYW4gZXJyb3IsIG9yIG90aGVyIGxvZ2ljIGhlcmVcclxufSk7XHJcbiJdfQ==