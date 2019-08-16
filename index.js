// Require in modules
require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');

// Instantiate the express app
const app = express();

// Set up any middleware or settings
app.set('view engine', 'ejs');
app.use(layouts);
app.use('/', express.static('static'));
app.use(express.urlencoded({ extended: false }));

// Controllers
app.use('/auth', require('./controllers/auth'));

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