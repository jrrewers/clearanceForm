'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var localStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');

module.exports = function (app, passport, mongoose) {
    var test_model = mongoose.model('test');
    var test_model2 = mongoose.model('test2');
    passport.use('local', new localStrategy(function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(username, password, done) {
            var foundIn_test_model, foundIn_test_model2;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            console.log('entered');
                            _context.next = 4;
                            return test_model.findOne({ username: username }).exec();

                        case 4:
                            foundIn_test_model = _context.sent;

                            if (!(!!foundIn_test_model && bcrypt.compareSync(password, foundIn_test_model.password))) {
                                _context.next = 7;
                                break;
                            }

                            return _context.abrupt('return', done(null, foundIn_test_model));

                        case 7:
                            _context.next = 9;
                            return test_model2.findOne({ username: username }).exec();

                        case 9:
                            foundIn_test_model2 = _context.sent;

                            if (!(!!foundIn_test_model2 && bcrypt.compareSync(password, foundIn_test_model2.password))) {
                                _context.next = 12;
                                break;
                            }

                            return _context.abrupt('return', done(null, foundIn_test_model2));

                        case 12:
                            return _context.abrupt('return', done(null, false));

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context['catch'](0);
                            return _context.abrupt('return', done(_context.t0));

                        case 18:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 15]]);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }()));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        test_model.findById(id, function (err, user) {
            done(err, user);
        });
    });
};
//# sourceMappingURL=authorization.js.map