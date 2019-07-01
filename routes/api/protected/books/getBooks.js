const express = require('express');
const router = express.Router();
const BookDao = require('../../../../dao/bookDao');
const resource = require('../../../../responses/response');
const { response } = require('../../../../engineering/gatekeeper');

router.get('/', async (req,res) => {
    let bookDao = new BookDao();
    let books = await bookDao.getAllBooks();
    let resp_obj = resource.fetch_books;
    resp_obj.books = books;
    response(res, 200, resp_obj);
})

module.exports = router;