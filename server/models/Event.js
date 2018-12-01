const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    start_at: {
        type: Date
    },
    end_at: {
        type: Date
    },
    location: {
        type: String
    },
    title: {
        type: String
    },
    all_day: {
        type: Boolean
    },
    url: {
        type: String
    },
    content: {
        type: String
    },
    featured_image_url: {
        type: String
    },
    category: {
        type: String
    },
    user: {
        type: String
    },
    attending: {
        default: [],
        type: Array
    }
})

module.exports = mongoose.model('Event', EventSchema)
