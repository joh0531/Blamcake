const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const port = process.env.PORT || 5000

mongoose.connect(
    'mongodb://blamcake:blamcake@167.99.226.23:27017/blamcake',
    { auth: { authdb: 'admin' }, useNewUrlParser: true }
)
mongoose.set('useCreateIndex', true)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected to database'))

if (process.env.NODE_ENV === 'production')
    app.use(express.static(path.join(__dirname, '../client/build')))

app.listen(port, () => console.log(`server running on port ${port}`))
