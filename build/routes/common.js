'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (app, passport, mongoose) {
    var pauth = passport.authenticate.bind(passport);
    var Verification_unit_manager = mongoose.model('Verification_unit_manager');
    var Clearance_unit_manager = mongoose.model('Clearance_unit_manager');
    var Employee = mongoose.model('Employee');
    var System_admin = mongoose.model('System_admin');
    app.post('/login', pauth('local'), function (req, res) {
        res.send(req.user);
    });

    app.post('/registerUser', function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
            var savedUser;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            savedUser = void 0;
                            _context.t0 = req.body.userToSave.group;
                            _context.next = _context.t0 === 'verification_unit_admins' ? 4 : _context.t0 === 'verification_unit_managers' ? 8 : _context.t0 === 'clearance_unit_admins' ? 12 : _context.t0 === 'clearance_unit_managers' ? 16 : _context.t0 === 'employees' ? 20 : _context.t0 === 'system_admins' ? 24 : 28;
                            break;

                        case 4:
                            _context.next = 6;
                            return Verification_unit_manager(req.body.userToSave).save();

                        case 6:
                            savedUser = _context.sent;
                            return _context.abrupt('break', 28);

                        case 8:
                            _context.next = 10;
                            return Verification_unit_manager(req.body.userToSave).save();

                        case 10:
                            savedUser = _context.sent;
                            return _context.abrupt('break', 28);

                        case 12:
                            _context.next = 14;
                            return Clearance_unit_manager(req.body.userToSave).save();

                        case 14:
                            savedUser = _context.sent;
                            return _context.abrupt('break', 28);

                        case 16:
                            _context.next = 18;
                            return Clearance_unit_manager(req.body.userToSave).save();

                        case 18:
                            savedUser = _context.sent;
                            return _context.abrupt('break', 28);

                        case 20:
                            _context.next = 22;
                            return Employee(req.body.userToSave).save();

                        case 22:
                            savedUser = _context.sent;
                            return _context.abrupt('break', 28);

                        case 24:
                            _context.next = 26;
                            return System_admin(req.body.userToSave).save();

                        case 26:
                            savedUser = _context.sent;
                            return _context.abrupt('break', 28);

                        case 28:
                            res.send(savedUser);

                        case 29:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }());
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlc1xcY29tbW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFVBQVUsR0FBVixFQUFlLFFBQWYsRUFBeUIsUUFBekIsRUFBbUM7QUFDaEQsUUFBTSxRQUFRLFNBQVMsWUFBVCxDQUFzQixJQUF0QixDQUEyQixRQUEzQixDQUFkO0FBQ0EsUUFBTSw0QkFBNEIsU0FBUyxLQUFULENBQWUsMkJBQWYsQ0FBbEM7QUFDQSxRQUFNLHlCQUF5QixTQUFTLEtBQVQsQ0FBZSx3QkFBZixDQUEvQjtBQUNBLFFBQU0sV0FBVyxTQUFTLEtBQVQsQ0FBZSxVQUFmLENBQWpCO0FBQ0EsUUFBTSxlQUFlLFNBQVMsS0FBVCxDQUFlLGNBQWYsQ0FBckI7QUFDQSxRQUFJLElBQUosQ0FBUyxRQUFULEVBQW1CLE1BQU0sT0FBTixDQUFuQixFQUFtQyxVQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CO0FBQ25ELFlBQUksSUFBSixDQUFTLElBQUksSUFBYjtBQUNILEtBRkQ7O0FBSUEsUUFBSSxJQUFKLENBQVMsZUFBVDtBQUFBLDZEQUEwQixpQkFBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCLHFDQURrQjtBQUFBLDBDQUdkLElBQUksSUFBSixDQUFTLFVBQVQsQ0FBb0IsS0FITjtBQUFBLDREQUliLDBCQUphLHVCQU9iLDRCQVBhLHVCQVViLHVCQVZhLHdCQWFiLHlCQWJhLHdCQWdCYixXQWhCYSx3QkFtQmIsZUFuQmE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUNBS0ksMEJBQTBCLElBQUksSUFBSixDQUFTLFVBQW5DLEVBQStDLElBQS9DLEVBTEo7O0FBQUE7QUFLZCxxQ0FMYztBQUFBOztBQUFBO0FBQUE7QUFBQSxtQ0FRSSwwQkFBMEIsSUFBSSxJQUFKLENBQVMsVUFBbkMsRUFBK0MsSUFBL0MsRUFSSjs7QUFBQTtBQVFkLHFDQVJjO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1DQVdJLHVCQUF1QixJQUFJLElBQUosQ0FBUyxVQUFoQyxFQUE0QyxJQUE1QyxFQVhKOztBQUFBO0FBV2QscUNBWGM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUNBY0ksdUJBQXVCLElBQUksSUFBSixDQUFTLFVBQWhDLEVBQTRDLElBQTVDLEVBZEo7O0FBQUE7QUFjZCxxQ0FkYztBQUFBOztBQUFBO0FBQUE7QUFBQSxtQ0FpQkksU0FBUyxJQUFJLElBQUosQ0FBUyxVQUFsQixFQUE4QixJQUE5QixFQWpCSjs7QUFBQTtBQWlCZCxxQ0FqQmM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUNBb0JJLGFBQWEsSUFBSSxJQUFKLENBQVMsVUFBdEIsRUFBa0MsSUFBbEMsRUFwQko7O0FBQUE7QUFvQmQscUNBcEJjO0FBQUE7O0FBQUE7QUF1QnRCLGdDQUFJLElBQUosQ0FBUyxTQUFUOztBQXZCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5QkgsQ0FuQ0QiLCJmaWxlIjoicm91dGVzXFxjb21tb24uanMiLCJzb3VyY2VSb290Ijoic3JjIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwLCBwYXNzcG9ydCwgbW9uZ29vc2UpIHtcclxuICAgIGNvbnN0IHBhdXRoID0gcGFzc3BvcnQuYXV0aGVudGljYXRlLmJpbmQocGFzc3BvcnQpO1xyXG4gICAgY29uc3QgVmVyaWZpY2F0aW9uX3VuaXRfbWFuYWdlciA9IG1vbmdvb3NlLm1vZGVsKCdWZXJpZmljYXRpb25fdW5pdF9tYW5hZ2VyJyk7XHJcbiAgICBjb25zdCBDbGVhcmFuY2VfdW5pdF9tYW5hZ2VyID0gbW9uZ29vc2UubW9kZWwoJ0NsZWFyYW5jZV91bml0X21hbmFnZXInKTtcclxuICAgIGNvbnN0IEVtcGxveWVlID0gbW9uZ29vc2UubW9kZWwoJ0VtcGxveWVlJyk7XHJcbiAgICBjb25zdCBTeXN0ZW1fYWRtaW4gPSBtb25nb29zZS5tb2RlbCgnU3lzdGVtX2FkbWluJyk7XHJcbiAgICBhcHAucG9zdCgnL2xvZ2luJywgcGF1dGgoJ2xvY2FsJyksIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgICAgIHJlcy5zZW5kKHJlcS51c2VyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFwcC5wb3N0KCcvcmVnaXN0ZXJVc2VyJywgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgbGV0IHNhdmVkVXNlcjtcclxuXHJcbiAgICAgICAgc3dpdGNoIChyZXEuYm9keS51c2VyVG9TYXZlLmdyb3VwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3ZlcmlmaWNhdGlvbl91bml0X2FkbWlucyc6XHJcbiAgICAgICAgICAgICAgICBzYXZlZFVzZXIgPSBhd2FpdCBWZXJpZmljYXRpb25fdW5pdF9tYW5hZ2VyKHJlcS5ib2R5LnVzZXJUb1NhdmUpLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd2ZXJpZmljYXRpb25fdW5pdF9tYW5hZ2Vycyc6XHJcbiAgICAgICAgICAgICAgICBzYXZlZFVzZXIgPSBhd2FpdCBWZXJpZmljYXRpb25fdW5pdF9tYW5hZ2VyKHJlcS5ib2R5LnVzZXJUb1NhdmUpLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjbGVhcmFuY2VfdW5pdF9hZG1pbnMnOlxyXG4gICAgICAgICAgICAgICAgc2F2ZWRVc2VyID0gYXdhaXQgQ2xlYXJhbmNlX3VuaXRfbWFuYWdlcihyZXEuYm9keS51c2VyVG9TYXZlKS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2xlYXJhbmNlX3VuaXRfbWFuYWdlcnMnOlxyXG4gICAgICAgICAgICAgICAgc2F2ZWRVc2VyID0gYXdhaXQgQ2xlYXJhbmNlX3VuaXRfbWFuYWdlcihyZXEuYm9keS51c2VyVG9TYXZlKS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZW1wbG95ZWVzJzpcclxuICAgICAgICAgICAgICAgIHNhdmVkVXNlciA9IGF3YWl0IEVtcGxveWVlKHJlcS5ib2R5LnVzZXJUb1NhdmUpLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzeXN0ZW1fYWRtaW5zJzpcclxuICAgICAgICAgICAgICAgIHNhdmVkVXNlciA9IGF3YWl0IFN5c3RlbV9hZG1pbihyZXEuYm9keS51c2VyVG9TYXZlKS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLnNlbmQoc2F2ZWRVc2VyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuXHJcbiJdfQ==