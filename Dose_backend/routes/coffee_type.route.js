const express = require('express')
const { coffee_typeController } = require('../controllers')

const router = express.Router()

router.get('/getCoffeById', coffee_typeController.getById);
router.post('/addCoffe',coffee_typeController.addCoffe)
router.post('/prova',coffee_typeController.prova)

module.exports = router




