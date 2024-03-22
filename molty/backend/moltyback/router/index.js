const Router = require('express')
const UserController = require('../controllers/user-controller')
const { body } = require('express-validator')
const router = new Router()

router.post('/logout', UserController.logout)
router.post('/registration',
    body('email').isEmail(),
    body('username').isLength({ min: 3, max: 32 }),
    UserController.registration)
router.post('/constructor/', UserController.saveConst)
router.get('/activate/:username/:link', UserController.activate)
router.get('/:link', UserController.getConst)
router.get('/refresh', UserController.refresh)
router.get('/users', UserController.users)

module.exports = router