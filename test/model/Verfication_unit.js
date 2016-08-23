'use strict';
'use strict';

const app = require('../../build/app');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('../../build/middleware/authorization')(app, passport, mongoose);

const Verification_unit = mongoose.model('Verification_unit');

describe('Verification Unit Model', function () {
    it('should add new Verficiation Unit', function *() {
        /*TODO: test for adding verification unit*/
    });
});
