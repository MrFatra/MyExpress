const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// * express object 
const app = express()

// * .env
require('dotenv/config')

// ? Application Middleware
app.use(bodyParser.json())

// ? Third-Party Middleware
app.use(morgan('dev'))

// ? import routes
const siswaRouter = require('./routes/siswa')

app.use('/siswa', siswaRouter)

// ? Middleware Error Handling
app.use('/', (req, res) => {
    res.status(404)
    res.send('404')
})

// ? Connect Database
mongoose.connect(process.env.DB_CONNECTION)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error Not Connected to Database!'))
db.once('open', () => {
    console.log('Connected to Database!');
})

app.listen(process.env.PORT, () => {
    console.log('Listening to PORT:' + process.env.PORT);
})