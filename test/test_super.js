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
      t.equal(res.text.includes('<div class="contact-section" >'), true, 'the page should have contact-section class');
      t.equal(res.text.includes('<div class="map-rgba"></div>'), true, 'the page should have map-rgba class');
      t.equal(res.text.includes('<div class="contact-form">'), true, 'the page should have contact-form class');
      t.equal(res.text.includes('<div class="contact-icons">'), true, 'the page should have contact-icons class');
      t.equal(res.text.includes('voyage@outlook.ps'), true, 'response should contain \'voyage@outlook.ps\'');
      t.equal(res.text.includes('Enter Your Message Here ..'), true, 'response should contain \'Enter Your Message Here ..\'');
      t.equal(res.text.includes('+9725920737272'), true, 'response should contain \'+9725920737272\'');
      t.end();
    });
});

test('about_us route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/about_us')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('<div class="about-idea">'), true, 'the page should have about-idea class');
      t.equal(res.text.includes('<div class="about-team">'), true, 'the page should have about-team class');
      t.end();
    });
});

test('/categories/restaurant route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/categories/restaurant')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('<title>restaurant</title>'), true, 'the page should have title \'restaurant\'');
      t.end();
    });
});
test('/categories/park route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/categories/park')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('<title>park</title>'), true, 'the page should have title \'park\'');
      t.end();
    });
});

test('/categories/cafe route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/categories/cafe')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('<title>cafe</title>'), true, 'the page should have title \'cafe\'');
      t.end();
    });
});
test('sign_up route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/sign_up')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) t.error(err);
      t.end();
    });
});

test('sign_in route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/sign_in')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) t.error(err);
      t.end();
    });
});

test('user_profile route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/user_profile/asmaa')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('<h2><a href="/user_profile/asmaa" id="asmaa" >@asmaa</a></h2>'), true, 'the page should contain user name  \'@asmaa\' ');
      t.end();
    });
});

test('user_profile of unknown user route with get method returns a status code of 404 ', (t) => {
  supertest(app)
    .get('/user_profile/asmsdgdaa')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('Sorry User not Found !'), true, 'the page should have \'Sorry User not Found !\' ');
      t.end();
    });
});

test('business route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/business')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('sorry the business not found'), true, 'the page should have \'sorry the business not found\' ');
      t.end();
    });
});

test('business route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/business?name=mazaj')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('<textarea placeholder="Add your opinion .." id="text-review"></textarea>'), true, 'the header should contain review form');
      t.end();
    });
});

test('sign_out route with get method returns a status code of 302 & redirect to home page ', (t) => {
  supertest(app)
    .get('/sign_out')
    .expect(302)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.headers.location, '/', 'respons should redirect to home page');
      t.end();
    });
});

test('sign_in route with post method', (t) => {
  supertest(app)
    .post('/sign_in')
    .send({
      username: 'asmaa@gmail.com',
      password: '000',
    })
    .expect(200)
    .expect('Content-Type', 'application/json')
    .end((err, res) => {
      t.error(err);
      t.deepEqual(res.body, {
        err: null,
        res: 'pass',
      }, 'response should contain object');
      t.end();
    });
});
