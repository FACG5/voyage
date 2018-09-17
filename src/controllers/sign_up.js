const hashPassword = require('./hashPassword');
const { addUser } = require('../model/queries/users');
const { addPerson } = require('../model/queries/person');
const { addBusiness } = require('../model/queries/business');

exports.get = (req, res) => {
  res.render('sign_up', {
    style: 'style', dom: 'sign_up', vald: 'validation', title: 'sign up',
  });
};
exports.post = (request, response) => {
  const data = request.body;
  const { email, password, type } = data;
  if (email && password) {
    hashPassword(password, (err, hash) => {
      if (err) {
        response.render('sign_up', { dom: 'sign_up', message: 'ERROR' });
      } else {
        addUser(data, hash)
          .then((result) => {
            const userId = result.rows[0].id;
            if (type === 0) { // type = 0 represents person
              addPerson(userId, data)
                .then(() => {
                  response.render('sign_in', { dom: 'sign_in', message: 'Person has been added successful' });
                }).catch(() => {
                  response.render('sign_up', { dom: 'sign_up', message: ' email already exists' });
                });
            } else if (type === 1) { // type = 1 represents business
              addBusiness(userId, data)
                .then(() => {
                  response.render('sign_in', { dom: 'sign_in', message: 'Business has been added successful' });
                }).catch(() => {
                  response.render('sign_up', { dom: 'sign_up', message: ' email already exists' });
                });
            }
          })
          .catch(() => {
            response.render('sign_up', {
              dom: 'sign_up',
              message: ' email already exists',
            });
          });
      }
    });
  }
};
