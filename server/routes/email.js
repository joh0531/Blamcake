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

router.post('/', jsonParser, (req, res) => {
    const { category, user } = req.body
    Promise.all([
        client.transmissions.send({
            content: {
                from: 'blamcake@emailblamcake.me',
                subject: 'Welcome to Blamcake!',
                text: 'hi from blamcake!'
            },
            recipients: [
                {
                    address: `${user}@nd.edu`
                }
            ]
        }),
		// Start new Promise chain here
		/*
		get netid's (NOT USER field) interests, and week later date to query
		then run findOne on that query
		then pass object with events, into send func below
		*/
		Event.find({
			// need interests from user here
			// title: {$eq: "Bridgestone NHL Winter Classic: Boston Bruins vs. Chicago Blackhawks"},
            category,
            start_at: { $gte: nextWeek }
			// have a string that is declared empty, then concat it with multiple events
		}).then( eventObj => {
            // console.log(eventObj)
            let content = "";
            eventObj.forEach(event => {
                content += `<h1>${event.title}</h1>${event.content}`;
            })
            if (content == "") content = "<h1>Nothing this week</h1>";
			return client.transmissions.send({
	            content: {
	                from: 'blamcake@emailblamcake.me',
	                subject: 'Blamcake Events!',
					html: content
	            },
	            options: {
	                start_time: nextMinute // TODO: change to nextWeek for production
	            },
	            recipients: [
	                {
	                    address: `${user}@nd.edu`
	                }
	            ]
	        })
		})
    ]).then(data => res.send(data))
    .catch(error => res.send(error))
})

module.exports = router
