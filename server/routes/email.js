const router = require('express').Router()
const jsonParser = require('body-parser').json()
const rp = require('request-promise')
const Event = require('../models/Event')
const SPARKPOST_API_KEY = require('../keys.json').SPARKPOST_API_KEY
const SparkPost = require('sparkpost')
const client = new SparkPost(SPARKPOST_API_KEY)

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// const today = new Date();
// const week = 7 * 24 * 60 * 60 * 1000;
// const nextWeek = new Date(today.getTime() + week);

router.get('/:user', jsonParser, (req, res) => {
    client.transmissions.send({
        content: {
            from: 'blamcake@example.com',
            subject: 'blamcake test',
            text: 'hi from blamcake!'
        },
        recipients: [
            {
                address: 'joh4@nd.edu'
            }
        ]
    }).then(data => {
        console.log(data)
        res.send('EMAIL SENT! :)')
    }).catch(error => {
        console.log(error)
        res.send('ERROR! :(')
    })
})

module.exports = router
