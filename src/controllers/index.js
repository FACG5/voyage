const express = require('express');
const router = express.Router();

const home = require('./home');
const signUp = require('./sign_up');
const signIn = require('./sign_in');
const businessPage = require('./business_page');
const userProfile = require('./user_profile');
const error = require('./error');

// router Home Page
router.get('/',home.get);

// router Signup Page
router.get('/sign_up',signUp.get);

// router Signin Page
router.get('/sign_in',signIn.get);
router.post('/sign_in',signIn.post);

module.exports = router;
