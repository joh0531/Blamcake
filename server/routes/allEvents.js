const router = require('express').Router()
const rp = require('request-promise');
const Event = require('../models/Event');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.get('/', (req, res) => {
	Event.find()
		.then(events => res.send({ events }))
		.catch(error => res.send({ error }));
		// {} for just sending as object
})

module.exports = router