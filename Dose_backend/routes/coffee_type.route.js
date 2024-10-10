const express = require('express')
const { coffee_typeController } = require('../controllers')

const router = express.Router()


//CRUD
router.get('/getCoffeeById', coffee_typeController.getById);
router.get('/getAllCoffees', coffee_typeController.getAllCoffees);
router.post('/addCoffee',coffee_typeController.addCoffee);
router.post('/deleteCoffee',coffee_typeController.deleteCoffee);
router.post('/updateCoffee', coffee_typeController.updateCoffee);

router.post('/prova',coffee_typeController.prova)

module.exports = router




