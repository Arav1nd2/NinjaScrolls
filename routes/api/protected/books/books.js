const express = require('express');
let router = express.Router();
const createBooks = require('./createBooks');
const deleteBook = require('./deleteBooks');
const getBooks = require('./getBooks');
const {verifyUser} = require('../../../../engineering/gatekeeper');

router.use('*', verifyUser);
router.use('/', [createBooks,getBooks,deleteBook]);
//router.use('/:id', deleteBook);



module.exports = router;