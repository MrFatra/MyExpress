const express = require('express')
const fs = require('fs')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')

// utils
const { loadContact, detailContact } = require('./utils/contacts')

var app = express()
const port = 3000;

// ? View Engine
app.set('view engine', 'ejs')

// ? Built-In Middleware
app.use(express.static('public'))

// ? Application Middleware
app.use((req, res, next) => {
    console.log('Time: ' + Date.now());
    next()
})

// ?  Third-Party Middleware
app.use(morgan('dev'))
app.use(expressLayouts)

app.get('/', (req, res) => {
    var options = {
        title: 'Homepage',
        // menggunakan express layouts
        layout: 'main-layouts'
    }
    res.render('pages/index', options)
})

app.get('/about', (req, res) => {
    var options = {
        title: 'About',
        layout: 'main-layouts'
    }
    res.render('pages/about', options)
        // res.sendFile('./about.html', { root: __dirname + "\\public" })
})

app.get('/contact', (req, res) => {
    const contacts = loadContact()
    var options = {
        title: 'Contacts',
        layout: 'main-layouts',
        contacts
    }
    res.render('pages/contact', options)
        // res.sendFile('./contact.html', { root: __dirname + "\\public" })
})

app.get('/contact/:nama', (req, res) => {
    const contact = detailContact(req.params.nama)
    var options = {
        title: 'Contact',
        layout: 'main-layouts',
        contact
    }
    res.render('pages/detail', options)
        // res.sendFile('./detail.html', { root: __dirname + "\\public" })
})

app.get('/jsonAPI', (req, res) => {
    var jsonFileBuffer = fs.readFileSync('./data/examp.json')
    var jsonFile = JSON.parse(jsonFileBuffer)

    res.json(jsonFile)
})

// mencoba mengambil Query String dari GET
app.get('/product', (req, res) => {
    res.send('Query string dari variable id: ' + req.query.id)
})

// mengambil parameter dari URL
app.get('/product/:id', (req, res) => {
    res.send('Parameter dari URL: ' + req.params.id)
})

// mengambil dua query string dari GET 
app.get('/product/:id/:name', (req, res) => {
    res.send('Parameter dari URL: ' + req.params.id + ' dan ' + req.params.name)
})

app.listen(port, () => {
    console.log('Listening to port: ' + port);
})