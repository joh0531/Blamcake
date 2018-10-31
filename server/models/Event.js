const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    start_at: {
        required: true,
        type: Date
    },
    end_at: {
        required: true,
        type: Date
    },
    location: {
        required: true,
        type: String
    },
    created_at: {
        required: true,
        type: Date
    },
    updated_at: {
        required: true,
        type: Date
    },
    title: {
        required: true,
        type: String
    },
    all_day: {
        required: true,
        type: Boolean
    },
    url: {
        type: String
    },
    content: {
        required: true,
        type: String
    },
    featured_image_url: {
        type: String
    },
    category: {
        required: true,
        type: String
    },
    user: {
        type: String
    }
})

module.exports = mongoose.model('Event', EventSchema)
