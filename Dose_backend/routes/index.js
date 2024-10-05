const express = require('express');

const usersRoute = require('./users.route');
const routerUser = express.Router();
routerUser.use('/user', usersRoute);

const coffee_typeRoute = require('./coffee_type.route');
const routerCoffe_type= express.Router();
routerCoffe_type.use('/coffee_type', coffee_typeRoute)


const preparationRoute = require('./coffee_type.route');
const routerPreparation= express.Router();
routerPreparation.use('/preparations', preparationRoute)

module.exports = [
    routerUser,
    routerCoffe_type,
    routerPreparation
];