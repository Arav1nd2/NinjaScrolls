const Books = require('../modals/books');

class BookDao {
    addBook(data) {
        this.bookTitle = data.name;
        this.authorId = data.authorId;
        this.price = data.price;
        this.description = data.description;
        this.genre = data.genre;
        this.publishedYear = data.publishedYear;
    }

    async saveAndReturn() {
        let book = new Books(this);
        let result = await book.save();
        return result;
    }

    async deleteBook(id) {
        let deletedBook = await Books.findByIdAndDelete(id);
        return deletedBook;
    }

    async getAllBooks() {
        let books = await Books.find();
        let bookList = new Array();
        books.forEach(book => {
            bookList.push(book._doc);
        })
        return bookList;
    }
}

module.exports = BookDao;