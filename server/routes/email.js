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

const today = new Date();
const minute = 60 * 1000;
const week = 7 * 24 * 60 * 60 * 1000;
const nextMinute = new Date(today.getTime() + minute);
const nextWeek = new Date(today.getTime() + week);

router.get('/:user', jsonParser, (req, res) => {
    Promise.all([
        client.transmissions.send({
            content: {
                from: 'blamcake@emailblamcake.me',
                subject: 'Welcome to Blamcake!',
                text: 'hi from blamcake!'
            },
            recipients: [
                {
                    address: `${req.params.user}@nd.edu`
                }
            ]
        }),
        client.transmissions.send({
            content: {
                from: 'blamcake@emailblamcake.me',
                subject: 'Blamcake Events!',
                text: 'hi again from blamcake!'
            },
            options: {
                start_time: nextMinute
            },
            recipients: [
                {
                    address: `${req.params.user}@nd.edu`
                }
            ]
        })
    ]).then(data => res.send(data))
    .catch(error => res.send(error))
})

module.exports = router
