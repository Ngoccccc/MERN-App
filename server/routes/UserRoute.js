const { Router } = require('express')
const { getUsers, createUser } = require('../controllers/UserController')
const router = Router()


router.get('/users', getUsers)
router.post('/create', createUser)

module.exports = router;