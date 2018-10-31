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
	const options = { json: true }; // Automatically parses the JSON string in the response
	const { interests } = req.body; // destructuring obj -> directly get interests prop from req
	const events = [];

	// Delete interests first, to update events with new current date
	Event.deleteMany({ category: { $in: interests }}).then(
		new Promise((resolve, reject) => {
			// req.body.interests - array of strings
			interests.forEach((element, i) => {
				options.uri = `https://events.nd.edu/events/calendar/${element}.json?upcoming`;

				rp(options)
			    	.then(({ elements }) => {
						elements.forEach((el, j) => {
							const {
								start_at,
								end_at,
								location,
								title,
								all_day,
								url,
								content,
								featured_image_url
							} = el;

							Event.create({
								start_at,
								end_at,
								location,
								title,
								all_day,
								url,
								content,
								featured_image_url,
								category: element,
								user: ''
							}).then(event => {
								events.push(event);
								return Promise.resolve();
							}).then(() => {
								if (
									i === interests.length - 1
									&& j === elements.length - 1
								) {
									resolve();
								}
							});
						})
			    	});
			})
		}).then(() => {
			res.send(events);
		})
	)
})

module.exports = router