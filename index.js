// Require in modules
require('dotenv').config();
let express = require('express');
let flash = require('connect-flash');
let layouts = require('express-ejs-layouts');
let passport = require('./config/passportConfig')
let session = require('express-session');

// Instantiate the express app
let app = express();

// Set up any middleware or settings
app.set('view engine', 'ejs');
app.use(layouts);
app.use('/', express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true

}));
app.use(flash()); //must be after session
app.use(passport.initialize())
app.use(passport.session())

// Custom middleware: write data to locals for every page
app.use((req, res, next) => {
    res.locals.alerts = req.flash();
    next();
})

// Controllers
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));


// Routes
app.get('/', (req, res) => {
    res.render('home');
})

app.get('*', (req, res) => {
    res.render('404');
})

// LISTEN!
app.listen(process.env.PORT, () => {
    console.log("☕ Server is now running at port", process.env.PORT);
})