const express = require('express');

const router = express.Router();

const categories = require('./categories');
const home = require('./home');
const signUp = require('./sign_up');

router.get('/',home.get);

router.get('/sign_up', signUp.get);
router.get('/categories/:category', categories.get);

// router.get('restaurant', categories.get);

module.exports = router;
