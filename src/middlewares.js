const { verify } = require('jsonwebtoken');

exports.verify = (req, res, next) => {
  if (!req.headers.cookie || !req.headers.cookie.includes('jwt')) {
    next();
  } else {
    const jwt = req.headers.cookie.split('=')[1];
    // const jwt = req;
    console.log(jwt);
    if (jwt) {
      verify(jwt, process.env.SECRET, (err, jwt) => {
        if (err) {
          res.send('Fail');
        } else {
          req.is_user = 'user';
          if (jwt.type === 'person') {
            req.is_person = 'person';
          } else {
            req.is_business = 'business';
          }
          const data = {
            name: jwt.name,
            type: jwt.type,
          };
          req.jwt_data = data;
          next();
        }
      });
    } else {
      res.redirect('/sign_in');
    }
  }
};
