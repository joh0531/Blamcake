const router = require('express').Router()
const jsonParser = require('body-parser').json()
const rp = require('request-promise');
const Event = require('../models/Event');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.get('/', jsonParser, (req, res) => {
	Event.deleteMany({})
		.then(() => res.send())
		.catch(error => res.send({error}))
})

module.exports = router