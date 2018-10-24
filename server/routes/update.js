const router = require('express').Router()
const jsonParser = require('body-parser').json()
// const utils = require('../utils')
const rp = require('request-promise');

const topics = [
	'architecture',
	'arts-and-entertainment',
	'arts-and-letters',
	'athletics',
	'business',
	'centers-and-institutes',
	'engineering',
	'global-affairs',
	'graduate-school',
	'health-and-recreation',
	'hesburgh-libraries',
	'law',
	'lectures-and-conferences',
	'research',
	'official-academic-calendar',
	'ongoing',
	'open-to-the-public',
	'privately-sponsored-events',
	'religious-and-spiritual',
	'science',
	'service',
	'student-life'
];

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.get('/', jsonParser, (req, res) => {
	const events = [];
	new Promise((resolve, reject) => {
		topics.forEach((element, i) => {
			const options = {
		    	// uri: 'https://events.nd.edu/events/calendar/athletics.json',
				uri: `https://events.nd.edu/events/calendar/${element}.json?upcoming`,
		    	json: true, // Automatically parses the JSON string in the response
				// resolveWithFullResponse: true
			};
			console.log(element);
			rp(options)
			// ({}) obj destructuring - picking from api obj - elements array
		    	.then(({elements}) => {
					console.log(elements);
					elements.forEach( el => {
						events.push(el);
					})
					// forces for each loop to end on last topic
					if(i === topics.length - 1) {
						resolve();
					}
		    	});
		})
	}).then(() => {
		res.send(events);
	})
})

module.exports = router