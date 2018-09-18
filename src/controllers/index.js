const express = require('express');

const router = express.Router();

const categories = require('./categories');
const home = require('./home');
const signUp = require('./sign_up');
const signIn = require('./sign_in');
const signOut = require('./sign_out');
const business = require('./business_page');
const error = require('./error');
const contact = require('./contact_us');
const about = require('./about_us');

const checkauth = require('../middlewares/checkauth');


router.use(checkauth.isSignIn);

router.get('/', home.get); // router [/] Home Page

router.post('/', home.post);

router.get('/contact_us', contact.get);

router.get('/about_us', about.get);

router.get('/sign_up', signUp.get); // router sign_up Page (git)
router.post('/sign_up', signUp.post);

router.get('/sign_in', signIn.get); // router sign_in Page (git)
router.post('/sign_in', signIn.post); // router sign_in Page (post)

router.get('/categories/:category', categories.get);

router.get('/business', business.get);
router.post('/business', business.post);

router.get('/sign_out', signOut.signout);


router.use(error.client);
router.use(error.server);
module.exports = router;
