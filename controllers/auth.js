const router = require('express').Router();

router.get('/signup', (req, res) => {
    res.render('auth/signup');
})
router.post('/signup', (req, res) => {
    res.send(req.body);
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', (req, res) => {
    res.send('Stub - ToDo: Log in, then redirect');
})

router.get('/logout', (req, res) => {
    res.render('auth/logout');
})

module.exports = router;