const express = require('express')
const UserController = require('../controller/User')
const router = express.Router()

router.get('/',UserController.getUsers)
router.post('/',UserController.createUser)
router.put('/:id',UserController.editUserById)
router.get('/:id',UserController.getUsersbyId)
router.delete('/:id',UserController.deleteUserById)


module.exports = router