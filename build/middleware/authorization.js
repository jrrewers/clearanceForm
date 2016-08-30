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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVcXGF1dGhvcml6YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFDQSxJQUFNLGdCQUFnQixRQUFRLGdCQUFSLEVBQTBCLFFBQWhEO0FBQ0EsSUFBTSxTQUFTLFFBQVEsVUFBUixDQUFmOztBQUVBLE9BQU8sT0FBUCxHQUFpQixVQUFVLEdBQVYsRUFBZSxRQUFmLEVBQXlCLFFBQXpCLEVBQW1DO0FBQ2hELFFBQUksYUFBYSxTQUFTLEtBQVQsQ0FBZSxNQUFmLENBQWpCO0FBQ0EsUUFBSSxjQUFjLFNBQVMsS0FBVCxDQUFlLE9BQWYsQ0FBbEI7QUFDQSxhQUFTLEdBQVQsQ0FBYSxPQUFiLEVBQXNCLElBQUksYUFBSjtBQUFBLDZEQUNsQixpQkFBZ0IsUUFBaEIsRUFBMEIsUUFBMUIsRUFBb0MsSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRVEsb0NBQVEsR0FBUixDQUFZLFNBQVo7QUFGUjtBQUFBLG1DQUd1QyxXQUFXLE9BQVgsQ0FBbUIsRUFBQyxVQUFVLFFBQVgsRUFBbkIsRUFBeUMsSUFBekMsRUFIdkM7O0FBQUE7QUFHWSw4Q0FIWjs7QUFBQSxrQ0FJWSxDQUFDLENBQUMsa0JBQUYsSUFBeUIsT0FBTyxXQUFQLENBQW1CLFFBQW5CLEVBQTZCLG1CQUFtQixRQUFoRCxDQUpyQztBQUFBO0FBQUE7QUFBQTs7QUFBQSw2REFLbUIsS0FBSyxJQUFMLEVBQVcsa0JBQVgsQ0FMbkI7O0FBQUE7QUFBQTtBQUFBLG1DQU93QyxZQUFZLE9BQVosQ0FBb0IsRUFBQyxVQUFVLFFBQVgsRUFBcEIsRUFBMEMsSUFBMUMsRUFQeEM7O0FBQUE7QUFPWSwrQ0FQWjs7QUFBQSxrQ0FRWSxDQUFDLENBQUMsbUJBQUYsSUFBMEIsT0FBTyxXQUFQLENBQW1CLFFBQW5CLEVBQTZCLG9CQUFvQixRQUFqRCxDQVJ0QztBQUFBO0FBQUE7QUFBQTs7QUFBQSw2REFTbUIsS0FBSyxJQUFMLEVBQVcsbUJBQVgsQ0FUbkI7O0FBQUE7QUFBQSw2REFXZSxLQUFLLElBQUwsRUFBVyxLQUFYLENBWGY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBYWUsaUJBYmY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBdEI7O0FBbUJBLGFBQVMsYUFBVCxDQUF1QixVQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCO0FBQ3hDLGFBQUssSUFBTCxFQUFXLEtBQUssRUFBaEI7QUFDSCxLQUZEOztBQUlBLGFBQVMsZUFBVCxDQUF5QixVQUFTLEVBQVQsRUFBYSxJQUFiLEVBQW1CO0FBQ3hDLG1CQUFXLFFBQVgsQ0FBb0IsRUFBcEIsRUFBd0IsVUFBUyxHQUFULEVBQWMsSUFBZCxFQUFvQjtBQUN4QyxpQkFBSyxHQUFMLEVBQVUsSUFBVjtBQUNILFNBRkQ7QUFHSCxLQUpEO0FBS0gsQ0EvQkQiLCJmaWxlIjoibWlkZGxld2FyZVxcYXV0aG9yaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJzcmMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmNvbnN0IGxvY2FsU3RyYXRlZ3kgPSByZXF1aXJlKCdwYXNzcG9ydC1sb2NhbCcpLlN0cmF0ZWd5O1xyXG5jb25zdCBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHRqcycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwLCBwYXNzcG9ydCwgbW9uZ29vc2UpIHtcclxuICAgIGxldCB0ZXN0X21vZGVsID0gbW9uZ29vc2UubW9kZWwoJ3Rlc3QnKTtcclxuICAgIGxldCB0ZXN0X21vZGVsMiA9IG1vbmdvb3NlLm1vZGVsKCd0ZXN0MicpO1xyXG4gICAgcGFzc3BvcnQudXNlKCdsb2NhbCcsIG5ldyBsb2NhbFN0cmF0ZWd5KFxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIGRvbmUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRlcmVkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmRJbl90ZXN0X21vZGVsID0gYXdhaXQgdGVzdF9tb2RlbC5maW5kT25lKHt1c2VybmFtZTogdXNlcm5hbWV9KS5leGVjKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISFmb3VuZEluX3Rlc3RfbW9kZWwgJiYgKGJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgZm91bmRJbl90ZXN0X21vZGVsLnBhc3N3b3JkKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmb3VuZEluX3Rlc3RfbW9kZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmRJbl90ZXN0X21vZGVsMiA9IGF3YWl0IHRlc3RfbW9kZWwyLmZpbmRPbmUoe3VzZXJuYW1lOiB1c2VybmFtZX0pLmV4ZWMoKTtcclxuICAgICAgICAgICAgICAgIGlmICghIWZvdW5kSW5fdGVzdF9tb2RlbDIgJiYgKGJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgZm91bmRJbl90ZXN0X21vZGVsMi5wYXNzd29yZCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZm91bmRJbl90ZXN0X21vZGVsMilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKSk7XHJcblxyXG4gICAgcGFzc3BvcnQuc2VyaWFsaXplVXNlcihmdW5jdGlvbih1c2VyLCBkb25lKSB7XHJcbiAgICAgICAgZG9uZShudWxsLCB1c2VyLmlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcihmdW5jdGlvbihpZCwgZG9uZSkge1xyXG4gICAgICAgIHRlc3RfbW9kZWwuZmluZEJ5SWQoaWQsIGZ1bmN0aW9uKGVyciwgdXNlcikge1xyXG4gICAgICAgICAgICBkb25lKGVyciwgdXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiXX0=