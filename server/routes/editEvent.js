const router = require('express').Router()
const jsonParser = require('body-parser').json()
const rp = require('request-promise');
const Event = require('../models/Event');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// netid, title
// {netid: "", title: ""}
router.post('/', jsonParser, (req, res) => {
	let today = new Date();
	const query = req.body.query;
	console.log(query);
	const update = req.body.update;
	console.log(query);
	// console.log(req.body);
	Event.update({
		query,
		update
	})
	.then((record) => res.send({record}))
	.catch((error) => res.send({error}))

})

module.exports = router