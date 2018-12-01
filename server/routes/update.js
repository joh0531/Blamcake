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

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

router.post('/', jsonParser, (req, res) => {
	const options = { json: true } // Automatically parses the JSON string in the response
	const { interests } = req.body // destructuring obj -> directly get interests prop from req

	// Delete interests first, to update events with new current date
    const categories = []
    interests.forEach(element => {
        options.uri = `https://events.nd.edu/events/calendar/${element}.json?upcoming`
        categories.push(
            rp(options).then(data => {
                const events = []
                data.elements.forEach(el => {
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
                    events.push(
                        Event.findOne({
                            title: {$eq: el.title},
                            content: {$eq: el.content}
                        }).then(obj => {
                            if (isEmpty(obj)) {
                                return Event.create({
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
                                })
                            } else return Promise.resolve()
                        })
                    )
                })
                return Promise.all(events)
            })
        )
    })
    Promise.all(categories)
        .then(() => Event.deleteMany({ start_at: { $lt: new Date().toISOString() } }))
        .then(() => Event.find({ category: { $in: interests }}))
        .then(events => res.send(events))
        .catch(error => res.send({ error }))
})

module.exports = router
