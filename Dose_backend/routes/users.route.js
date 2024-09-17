const express = require('express')
const { userController } = require('../controllers')

const router = express.Router()

router.post('/prova/1', userController.prova);
router.post('/login', userController.login);
router.post('/getUser', userController.getUser);



module.exports = router




