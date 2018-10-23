const router = require('express').Router()
const jsonParser = require('body-parser').json()
// const utils = require('../utils')
const rp = require('request-promise');

const topics = ['architecture', 'athletics'];

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.get('/', jsonParser, (req, res) => {
	const events = [];
	topics.forEach( element => {
		const options = {
	    	// uri: 'https://events.nd.edu/events/calendar/athletics.json',
			uri: `https://events.nd.edu/events/calendar/${element}.json`,
	    	json: true, // Automatically parses the JSON string in the response
			resolveWithFullResponse: true
		};
		console.log(element);
		rp(options)
		// ({}) obj destructuring - picking from api obj - elements array
	    	.then(({elements}) => {
	        	// console.log('User has %d events', events.length);
				// res.send(e[elements]);
				// events.append(elements);
				console.log(elements);
				elements.forEach( el => {
					events.push(el);
				})
	    	});
	    	// .catch(err => {
	        // 	// API call failed...
			// 	res.send('failed to get events api');
	    	// });
	})
	res.send(events);
})

router.post('/', jsonParser, (req, res) => {
    // utils.makePDF(req.body.id)
    //     .then(([pdf]) => utils.sendEmail(req.body.email, pdf))
    //     .then(() => res.send('email sent!'))
    //     .catch(error => res.send(error))

})

module.exports = router