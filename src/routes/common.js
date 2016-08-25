'use strict';

module.exports = function (app, passport) {
    const pauth = passport.authenticate.bind(passport);
    app.post('/login', pauth('local'), function (req, res) {
            res.send(req.user);
    });
    app.get('/', (req, res) => res.send('ok'))
};


