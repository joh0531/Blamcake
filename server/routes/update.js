const router = require('express').Router()
const jsonParser = require('body-parser').json()
const rp = require('request-promise');
const Event = require('../models/Event');
// TODO: Need to do add new upcoming events based on interests
	// findOne
// TODO: Delete past events from DB
	// date comparison
// const topics = [
// 	'architecture',
// 	'arts-and-entertainment',
// 	'arts-and-letters',
// 	'athletics',
// 	'business',
// 	'centers-and-institutes',
// 	'engineering',
// 	'global-affairs',
// 	'graduate-school',
// 	'health-and-recreation',
// 	'hesburgh-libraries',
// 	'law',
// 	'lectures-and-conferences',
// 	'research',
// 	'official-academic-calendar',
// 	'ongoing',
// 	'open-to-the-public',
// 	'privately-sponsored-events',
// 	'religious-and-spiritual',
// 	'science',
// 	'service',
// 	'student-life'
// ];

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.post('/', jsonParser, (req, res) => {
	const options = { json: true }; // Automatically parses the JSON string in the response
	const { interests } = req.body; // destructuring obj -> directly get interests prop from req
	const events = [];
	let today = new Date();
	// Delete old events from db first
	// db.collection.deleteMany(){
	// 	{ "Event.end_at": { $lt: today } },
	// 	{
	//
	// 	}
	// }
	// Not sure how this will work actually

	new Promise((resolve, reject) => {
		// req.body.interests - array of strings
		interests.forEach((element, i) => {
			options.uri = `https://events.nd.edu/events/calendar/${element}.json?upcoming`;
			/*
			TODO: from this, add ones that are further in future.
			delete past events that aren't in DB
			findOne() - after request, it gives us a list of upcoming events (PROMISE BTW)
			findOne on the list (based on the schema),
			if it exists ignore
			else, create new obj with event and add to db
			*/
			// delete past events

			rp(options)
			// ({}) obj destructuring - picking from api obj - elements array
		    	.then(({ elements }) => {
					elements.forEach((el, j) => {
						const {
							start_at,
							end_at,
							location,
							created_at,
							updated_at,
							title,
							all_day,
							url,
							content,
							featured_image_url
						} = el;

						var isExistingEvent = Event.findOne({
							start_at,
							end_at,
							location,
							created_at,
							updated_at,
							title,
							all_day,
							url,
							content,
							featured_image_url,
							category: element,
							user: ''
						})
						console.log(isExistingEvent);
						// and check what it returns when it doesn't find one
						if(isExistingEvent == null) {
							Event.create({
								start_at,
								end_at,
								location,
								created_at,
								updated_at,
								title,
								all_day,
								url,
								content,
								featured_image_url,
								category: element,
								user: ''
							}).then(event => {
								events.push(event);
								if (
									i === interests.length - 1
									&& j === elements.length - 1
								) {
									resolve();
								}
							});
						} else {
							// no need for break statement?
							// break itself doesn't work, so just go straight to then.
							if (
								i === interests.length - 1
								&& j === elements.length - 1
							) {
								resolve();
							}
							console.log('ignored');
							console.log("j: " + j);
							console.log("i: " + i);
							console.log("interests.length: " + interests.length);
						}

					})
		    	});
		})
	}).then(() => {
		res.send(events);
	})
})

module.exports = router