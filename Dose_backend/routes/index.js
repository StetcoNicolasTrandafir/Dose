const express = require('express');

const usersRoute = require('./users.route');
const routerUser = express.Router();
routerUser.use('/user', usersRoute);

const coffee_typeRoute = require('./coffee_type.route');
const routerCoffe_type= express.Router();
routerCoffe_type.use('/coffee_type', coffee_typeRoute)

module.exports = [
    routerUser,
];