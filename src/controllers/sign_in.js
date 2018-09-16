const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { checkUser, getName } = require('../model/queries/users');

exports.get = (req, res) => {
  res.render('sign_in', {
    style: 'style',
    dom: 'sign_in',
    title: 'sign in',
    style_special: 'sign_in',
  });
};
/**
 * check out if the email is exist
 * check the pass hash is true
 * and the successful login create cookies
 */
exports.post = (req, res, next) => {
  const { email, password } = req.body;

  checkUser(email)
    .then((request) => {
      if (request.length > 0) {
        bcrypt.compare(password, request[0].password)
          .then((response) => {
            if (response === false) {
              res.send({ err: 'Password not true' });
            } else {
              getName(request[0].type, request[0].id)
                .then((resName) => {
                  const object = {
                    name: resName,
                    type: request[0].type,
                  };
                  const cookies = sign(object, process.env.SECRET);
                  res.cookie('jwt', cookies, { httpOnly: true });
                  res.send({
                    err: null,
                    res: 'pass',
                  });
                })
                .catch(err => next(err));
            }
          })
          .catch(err => res.send({ err: `Error in password hash and ${err}` }));
      } else {
        res.send({ err: 'Email not found' });
      }
    })
    .catch(err => next(err));
};
