const express = require('express')
const router = express.Router()
const {registerUser,loginUser} = require('../controllers/user.controller.js')
const { postMiddleware } = require('../middleware/postMiddleware.js');

router.post('/register',registerUser)
router.post('/login',loginUser)

router.get('/check', postMiddleware, (req, res) => {
    res.status(200).json({ user: req.user })
})

module.exports = router