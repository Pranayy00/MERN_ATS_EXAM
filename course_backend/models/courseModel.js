const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    instructor: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: Number, required: true },       // in hours
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'], // mirrors the <select><option> values on the frontend
        required: true
    },
    thumbnail: { type: String }                        // stores an image URL, or a base64 data-url from a file upload

}, {
    timestamps: true
})

const courseModel = mongoose.model('courses', courseSchema)

module.exports = courseModel
