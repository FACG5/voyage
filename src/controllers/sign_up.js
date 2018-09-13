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
  const { email } = data;
  const { password } = data;
  const { type } = data;

  if (type == 0 || 1 && email && password) {
    hashPassword(password, (err, hash) => {
      if (err) {
        response.render('sign_up', { dom: 'sign_up', msg: 'ERROR' });
      } else {
        addUser(email, hash, type)
          .then((res) => {
            const user_id = res.rows[0].id;
            if (type == 0) { // type = 0 represents person
              const { userName } = data;
              const { fName } = data;
              const { lName } = data;
              const { birthDay } = data;
              const { gender } = data;

              addPerson(user_id, userName, fName, lName, birthDay, gender)
                .then((res) => {
                  res.render('sign_in', { dom: 'sign_in', msg: 'Person has been added successful' })
                }).catch((err) => {
                  res.render('sign_up', { dom: 'sign_up', msg: 'email is already exist' });
                });
            } else if (type == 1) { // type = 1 represents business
              const { businessName } = data;
              const { businessAddress } = data;
              const { businessDescription } = data;
              const { image } = data;
              const { businessCategory } = data;

              addBusiness(user_id, businessName, businessAddress,
                 businessDescription, image, businessCategory)
                .then((res) => {
                  response.render('sign_in', { dom: 'sign_in', msg: 'Businesshas been added successful' });
                }).catch((err) => {
                  response.render('sign_up', { dom: 'sign_up', msg: 'email is already exist' });
                });
            }
          })
          .catch((err) => {
            response.render('sign_up', {
              dom: 'sign_up',
              msg: 'email is already exist',
            });
          });
      }
    });
  }
};
