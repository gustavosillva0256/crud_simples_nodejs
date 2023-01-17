const {Router} = require('express')
const UserController = require('./controller/UserController')
const User =  require('./controller/UserController')

const router = Router()

router.post('/create-user', UserController.createUser )

router.put('/update-user/:id', UserController.updateUser)

router.get('/list-user', UserController.listUser)

router.delete('/delete-user/:id', UserController.deleteUser)

module.exports = router