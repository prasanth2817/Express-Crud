const express = require('express')
const UserController = require('../controller/User')
const Auth =require("../common/Auth")
const router = express.Router()


router.get('/',Auth.validate,UserController.getUsers)
router.post('/',UserController.createUser)
router.post('/login',UserController.Login)
router.put('/:id',UserController.editUserById)
router.get('/:id',UserController.getUsersbyId)
router.delete('/:id',UserController.deleteUserById)


module.exports = router