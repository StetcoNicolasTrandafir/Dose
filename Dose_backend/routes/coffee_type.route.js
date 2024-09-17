const express = require('express')
const { coffee_typeController } = require('../controllers')

const router = express.Router()

router.get('/getCoffeById', coffee_typeController.getById);

module.exports = router




