'use strict';
require('babel-polyfill');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let express = require('express');
let app = express();

let db = require('./model/db')(mongoose);

let passport = require('passport');
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');
let session      = require('express-session');

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    secret: 'zażółćgęśląjaźń',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('connect-flash')());

require('./middleware/authorization')(app, passport, mongoose);
require('./routes/common')(app, passport, mongoose);
require('./routes/review')(app, passport, mongoose);

app.listen(3000);

(async function createMockDatabase(){
    /*const Clearance_unit_manager = mongoose.model('Clearance_unit_manager');
    const Clearance_unit = mongoose.model('Clearance_unit');
    const Verificiation_Unit = mongoose.model('Verification_unit');
    const Employee = mongoose.model('Employee');

    const CUsToSave = [
        {name: 'Biblioteka Zbiorów Specjalnych'},
        {name: 'Pływalnia Uniwersytecka'},
        {name: 'Akademik Jowita'},
        {name: 'Stołówka Wydziału Nauk Społecznych'}
    ];
    let savedCUs = await Clearance_unit.insertMany(CUsToSave);
    console.log(savedCUs);

    const savedVU = await new Verificiation_Unit({name: 'Wydział Nauk Społecznych'}).save();
    console.log(savedVU);

    let verification_unit_id = await Verificiation_Unit.findOne({name: 'Wydział Nauk Społecznych'}).exec();
    verification_unit_id = verification_unit_id._id;
    const employeeToSave = {
        verification_unit_id: verification_unit_id,
        username: 'user',
        password: bcrypt.hashSync('password'),
        name: 'Jan Kowalski',
        mail: 'example@mail.com'
    };

    let savedEmployee = await new Employee(employeeToSave).save();
    console.log(savedEmployee);

    let CU = await Clearance_unit.findOne().exec();
    const CUManagerToSave = {
        clearance_unit_id: CU._id,
        username: 'CUManager',
        password: bcrypt.hashSync('CUManager'),
        name: 'Jan Kowalski, CU Manager',
        mail: 'mail@mail.com',
        group: 'clearance_unit_managers'
    };
    const savedCUManager = await new Clearance_unit_manager(CUManagerToSave).save();
    console.log(savedCUManager);*/
})();



module.exports.app = app;
process.on('unhandledRejection', function(reason, p) {
    console.log("Unhandled Rejection at: ", p, " reason: ", reason);
});
