// required modules
require('dotenv').config()
let express = require('express')
let layouts = require('express-ejs-layouts')

// Instance
let app = express()

// middleware
app.set('view engine', 'ejs')
app.use(layouts)
app.use('/', express.static('static'))
app.use(express.urlencoded({ extended: false }))

// controllers
app.use('/auth', require ('./controllers/auth'))


// routes
app.get('/', (req, res) => {
    res.render('home')
})


//catch-all
app.get('*', (req, res) => {
    res.render('404')
})



//listen
app.listen(process.env.PORT, () => {
    console.log('Server is running at Port', process.env.PORT)
})