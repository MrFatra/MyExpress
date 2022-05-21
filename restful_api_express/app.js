const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// * masukan variable di file .env
require('dotenv/config')

const app = express()

// ? MiddleWare
app.use(bodyParser.json())

// * import routes
const santriRoutes = require('./routes/santri')

// ? routes example
app.use('/santri', santriRoutes)

// ? connect to DB
mongoose.connect(process.env.DB_CONNECTION)
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database Connection Error'))
db.once('open', () => {
    console.log('Database is Connected!');
})

// ? listen port
app.listen(process.env.PORT, () => {
    console.log('Listening to port : ' + process.env.PORT);
})