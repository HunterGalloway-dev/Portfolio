const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    shortDescription: {
        required: true,
        type: String
    }
    ,
    githubUrl: {
        required: true,
        type: String
    },
    tags: {
        required: true,
        type: [String]
    }
})

module.exports = mongoose.model('Project',dataSchema)