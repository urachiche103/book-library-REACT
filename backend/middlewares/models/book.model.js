const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    author: {type: String, required: true},
    country: {type: String, required: false},
    language: {type: String, required: false},
    pages: {type: Number, required: true},
    title: {type: String, required: false},
    year: {type: Number, required: true},
})

module.exports = mongoose.model("books", bookSchema)