const express = require('express');
const router = express.Router();
const BookDao = require('../../../../dao/bookDao');
const resource = require('../../../../responses/response');
const { response } = require('../../../../engineering/gatekeeper');


router.post('/', async (req, res) => {
    let bookDao = new BookDao();
    bookDao.addBook(req.body);
    let result = await bookDao.saveAndReturn();
    let resultObj = resource['book_created'];
    resultObj.data = result;
    response(res, 201, resultObj);
})




module.exports = router;