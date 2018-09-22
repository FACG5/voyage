const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { checkUser, getName } = require('../model/queries/users');

exports.get = (req, res) => {
  if (req.isUser) {
    res.redirect('/');
  } else {
    res.render('sign_in', {
      style: 'style',
      dom: 'sign_in',
      title: 'sign in',
      style_special: 'sign_in',
    });
  }
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
              res.send({ err: 'invalid username or password' });
            } else {
              getName(request[0].type, request[0].id)
                .then((resName) => {
                  const object = {
                    name: resName,
                    type: request[0].type,
                  };
                  const jwt = sign(object, process.env.SECRET);
                  res.cookie('jwt', jwt, { httpOnly: true });
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
        res.send({ err: 'length is < 0' });
      }
    })
    .catch(err => next(err));
};
