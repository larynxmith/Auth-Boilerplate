let router = require('express').Router()

router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.get('/logout', (req, res) => {
    res.render('auth/logout')
})

module.exports = router