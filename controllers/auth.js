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

router.post('/login', (req, res) => {
    res.send("STUB - ToDo: login, then redirect")
})

module.exports = router