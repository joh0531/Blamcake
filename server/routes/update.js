// TODO: refactor into not just deleting every time update is called, but by date.
// TODO: refactor update to update data.
const router = require('express').Router()
const jsonParser = require('body-parser').json()
const rp = require('request-promise')
const Event = require('../models/Event')

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

function getDate(date) {
    const dateObj = new Date(date);
    return new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000)
}

router.post('/', jsonParser, (req, res) => {
	const options = { json: true } // Automatically parses the JSON string in the response
	const { interests } = req.body // destructuring obj -> directly get interests prop from req

	// Delete interests first, to update events with new current date
	// Event.deleteMany({ category: { $in: interests }, user: '' })
	Event.deleteMany({ end_at: { $lt: new Date() }, user: '' })
        .then(new Promise((resolve, reject) => {
			// req.body.interests - array of strings
			interests.forEach((element, i) => {
				options.uri = `https://events.nd.edu/events/calendar/${element}.json?upcoming`
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
							} = el
							Event.findOne({
								title: {$eq: el.title},
								content: {$eq: el.content}
							}).then( existObj => {
								if(!existObj) {
									Event.create({
										location,
										title,
										all_day,
										url,
										content,
										featured_image_url,
                                        start_at: getDate(start_at),
										end_at: getDate(end_at),
										category: element,
										user: ''
									}).then(() => {
										if (
											i === interests.length - 1
											&& j === elements.length - 1
										) resolve();
									})
								}
							})
						})
			    	})
			})
		}).then(() => {
            return Event.find({ category: { $in: interests }})
		}).then(events => res.send(events))
        .catch(error => res.send(error))
	)
})

module.exports = router
