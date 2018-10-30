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
	Event.insertOne({
		start_at: today,
		// end_at,
		// location,
		// created_at,
		// updated_at,
		// title,
		// all_day,
		// url,
		// content,
		// featured_image_url,
		category: req.interest,
		user: ''
	})
	.then((record) => res.send({record}))
	.catch((error) => res.send({error}))
})

module.exports = router