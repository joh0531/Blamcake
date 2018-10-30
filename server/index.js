const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const test = require('./routes/test')
const update = require('./routes/update')
const allEvents = require('./routes/allEvents')
const deleteAll = require('./routes/deleteAll')

const port = process.env.PORT || 5000

mongoose.connect(
    'mongodb://167.99.226.23:27017/blamcake',
    { useNewUrlParser: true }
)
mongoose.set('useCreateIndex', true)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected to database'))

if (process.env.NODE_ENV === 'production')
    app.use(express.static(path.join(__dirname, '../client/build')))

app.use('/test', test)
app.use('/update', update)
app.use('/allEvents', allEvents)
app.use('/deleteAll', deleteAll)
app.listen(port, () => console.log(`server running on port ${port}`))
