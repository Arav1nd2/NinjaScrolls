const express = require('express');
const router = express.Router();
const { response } = require('../../../../engineering/gatekeeper');
const BookDao = require('../../../../dao/bookDao');
const resource = require('../../../../responses/response');

router.delete('/:id', async (req,res) => {
    console.log(req.params.id);
    let bookDao = new BookDao();
    let deletedBook = await bookDao.deleteBook(req.params.id);
    let res_data = resource.book_deleted;
    res_data.data = deletedBook;
    response(res,200,res_data);
})

module.exports = router;