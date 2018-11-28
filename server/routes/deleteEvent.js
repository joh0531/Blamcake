const router = require('express').Router()
const jsonParser = require('body-parser').json()
const rp = require('request-promise');
const Event = require('../models/Event');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.delete('/', jsonParser, (req, res) => {
	Event.findByIdAndDelete(req.body.id)
    	.then(event => res.send({ event }))
    	.catch(error => res.send({ error }))
})

module.exports = router
