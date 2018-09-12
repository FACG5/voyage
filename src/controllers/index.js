const express = require('express');

const router = express.Router();

const home = require('./home');

const signUp = require('./sign_up');
const signIn = require('./sign_in');
const business = require('./business_page');

router.get('/', home.get); // router [/] Home Page
router.post('/', home.post);

router.get('/business', business.get);


router.get('/sign_up', signUp.get);
router.get('/sign_up', signUp.get); // router sign_up Page (git)

router.get('/sign_in', signIn.get); // router sign_in Page (git)
router.post('/sign_in', signIn.post); // router sign_in Page (post)

module.exports = router;
