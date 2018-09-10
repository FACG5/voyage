const express = require('express');
const router = express.Router();
const search = require('./search');

const home = require('./home');

const signUp = require('./sign_up');

router.get('/',home.get);
router.post('/',home.post);


router.get('/sign_up',signUp.get);
// router.get('/search',search.get);

module.exports = router;
