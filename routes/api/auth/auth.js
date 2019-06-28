const express = require('express');
const router = express.Router();
const login = require('./login');
const register = require('./register');

router.use('/', [login, register]);


module.exports = router;