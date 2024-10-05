const express = require('express')
const { preparationsController, coffee_typeController } = require('../controllers')

const router = express.Router()

router.get('/getPrepById', preparationsController.getById);
router.post('/addPrep',preparationsController.addPreparation)
router.post('/deletePrep',preparationsController.deletePreparation)


router.post('/prova',preparationsController.prova)

module.exports = router
