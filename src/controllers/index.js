const express = require('express');

const router = express.Router();

// const search = require('./search');

const home = require('./home');

const signUp = require('./sign_up');

const business = require('./business_page');

router.get('/', home.get);

router.get('/business', business.get);

router.post('/', home.post);

router.post('/', home.postReviews);


router.get('/sign_up', signUp.get);

// router.get('/search', search.get);

module.exports = router;
