let router = require('express').Router()

// GET /profile
router.get('/', (req, res) => {
    res.render('profile/index')
})

// GET  profile/admin
router.get('/', (req, res) => {
    res.render('profile/admin')
})

module.exports = router