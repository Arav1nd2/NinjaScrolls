const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Auth',
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Books', BookSchema);