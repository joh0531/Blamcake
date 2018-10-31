const router = require('express').Router()
const jsonParser = require('body-parser').json()
const rp = require('request-promise');
const Event = require('../models/Event');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.post('/', jsonParser, (req, res) => {
	let today = new Date();
	console.log(req.body);
	Event.create(req.body)
		.then((event) => {
			console.log(event);
			Event.insertOne({event})
		})
		.then((record) => res.send({record}))
		.catch((error) => res.send({error}))

})

module.exports = router