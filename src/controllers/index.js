const express = require('express');
const router = express.Router();

const home = require('./home');
const signUp = require('./sign_up');

router.get('/',home.get);

router.get('/sign_up',signUp.get);

router.post('/sign_up',signUp.post);

module.exports = router;
