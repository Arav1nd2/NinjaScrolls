module.exports = {
    register_success: {
        code: 23,
        message: "New User has been successfully created!"
    },
    register_failure: {
        code: 22,
        message: "Username already exists"
    },
    login_success: {
        code: 32,
        message: "Login success"
    },
    login_failure: {
        code: 33,
        message: "Invalid Credentials"
    },
    book_created : {
        code: 12,
        message: "A book has been successfully created!"
    },
    book_deleted: {
        code: 11,
        message: "Book has been deleted"
    },
    book_delete_fail : {
        code: 10,
        message: "Oops! Something went wrong."
    },
    fetch_books: {
        code: 9,
        message: "Fetched a list of books"
    }
}