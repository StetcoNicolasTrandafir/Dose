const express = require('express')
const { coffee_typeController } = require('../controllers')

const router = express.Router()

router.get('/getCoffeeById', coffee_typeController.getById);
router.post('/addCoffee',coffee_typeController.addCoffe)
router.post('/deleteCoffee',coffee_typeController.deleteCoffe)


router.post('/prova',coffee_typeController.prova)

module.exports = router




