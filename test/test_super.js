const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

// Home Route
test('Home route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('<title>Home</title>'), true, 'the page should have title \'home\'');
      t.equal(res.text.includes('<div class="categoriesBtns">'), true, 'the page should have categoriesBtn class');
      t.equal(res.text.includes('<section class="search-section">'), true, 'the page should have search-section class');
      t.equal(res.text.includes('<div class="reviews-section">'), true, 'the page should have reviews-section class');
      t.equal(res.text.includes('coffee shops'), true, 'response should contain \'coffee shops\'');
      t.equal(res.text.includes('parks'), true, 'response should contain \'parks\'');
      t.equal(res.text.includes('restaurants'), true, 'response should contain \'restaurants\'');
      t.end();
    });
});


test('contact_us route with get method returns a status code of 200', (t) => {
  supertest(app)
    .get('/contact_us')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('contact-section'), true, 'the page should have contact-section class');
      t.equal(res.text.includes('map-rgba'), true, 'the page should have map-rgba class');
      t.equal(res.text.includes('contact-form'), true, 'the page should have contact-form class');
      t.equal(res.text.includes('contact-icons'), true, 'the page should have contact-icons class');
      t.equal(res.text.includes('voyage@outlook.ps'), true, 'response should contain \'voyage@outlook.ps\'');
      t.equal(res.text.includes('Enter Your Message Here ..'), true, 'response should contain \'Enter Your Message Here ..\'');
      t.equal(res.text.includes('+9725920737272'), true, 'response should contain \'+9725920737272\'');
      t.end();
    });
});

test('Home route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/about_us')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) t.error(err);
      t.end();
    });
});


test('Home route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/about_us')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) t.error(err);
      t.end();
    });
});

test('Home route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/sign_up')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) t.error(err);
      t.end();
    });
});

test('Home route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/bu')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) t.error(err);
      t.end();
    });
});
