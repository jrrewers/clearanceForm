'use strict';

module.exports = function (app, passport) {
    var pauth = passport.authenticate.bind(passport);
    app.post('/login', pauth('local'), function (req, res) {
        res.send(req.user);
    });
};
//# sourceMappingURL=common.js.map