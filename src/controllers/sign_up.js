const hashPassword = require('./hashPassword');
const { addUser } = require('../model/queries/users');
const { addPerson } = require('../model/queries/person');
const { addBusiness } = require('../model/queries/business');

exports.get = (req, res) => {
  res.render('sign_up', {
    style: 'style', dom: 'sign_up', vald: 'validation', title: 'sign up', a: true,
  });
};
exports.post = (request, response) => {
  const data = request.body;
  const { email, password, type } = data;
  if (type === 0 || 1 && email && password) {
    hashPassword(password, (err, hash) => {
      if (err) {
        response.render('sign_up', { dom: 'sign_up', msg: 'ERROR' });
      } else {
        addUser(data)
          .then((res) => {
            const userId = res.rows[0].id;
            if (type === 0) { // type = 0 represents person
              addPerson(userId, data)
                .then(() => {
                  response.render('sign_in', { dom: 'sign_in', msg: 'Person has been added successful' });
                }).catch((err) => {
                  response.render('sign_up', { dom: 'sign_up', msg: ' email already exists' });
                });
            } else if (type === 1) { // type = 1 represents business
              addBusiness(userId, data)
                .then(() => {
                  response.render('sign_in', { dom: 'sign_in', msg: 'Businesshas been added successful' });
                }).catch((err) => {
                  console.log('eeeerr', err);
                  response.render('sign_up', { dom: 'sign_up', msg: ' email already exists' });
                });
            }
          })
          .catch((err) => {
            response.render('sign_up', {
              dom: 'sign_up',
              msg: ' email already exists',
            });
          });
      }
    });
  }
};
