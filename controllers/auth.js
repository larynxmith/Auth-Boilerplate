const router = require('express').Router();
const db = require('../models');

router.get('/signup', (req, res) => {
    res.render('auth/signup');
})
router.post('/signup', (req, res) => {
    if (req.body.password !== req.body.password_verify) {
        req.flash('error', 'Passwords do not match!');
        res.redirect('/auth/signup');
    }
    else{
       //passwords matched; create user if they don't already exist
       db.user.findOrCreate({
           where: { email: req.body.email },
           defaults: req.body
       })
       .spread((user, wasCreated) => {
           if (wasCreated) {
               //this is legitimately a new user, so created
               res.send('Successful creation of user. TODO: Autoatically log in now');
           }
           else {
               //if user already exists, don't allow them to create, make them log in
               req.flash('error', 'Account already exists, please log in!');
               res.redirect('/auth/login')
           }
       })
       .catch(err => {
        //print ALL the error info to the console
        console.log('Error in POST /auth/signup', err);
        //generic error for flash msg
        req.flash('error', 'Something went awry :(')
        // get validation-secific errors(important to show to user for UX)
        if (err && err.errors) {
            err.errors.forEach(e => {
                if (e.type === 'Validation error') {
                    req.flash('error', 'Validation Issue - ' + e.message)
                }
            })
        }
        //redirect user back to signup page ot try again
        res.redirect('/auth/signup');
       })
    }
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