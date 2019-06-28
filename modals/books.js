const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Books', BookSchema);