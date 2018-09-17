const { verify } = require('jsonwebtoken');

exports.isSingIn = (req, res, next) => {
  req.isUser = false;
  const { jwt } = req.cookies;
  if (jwt) {
    verify(jwt, process.env.SECRET, (err, data) => {
      if (err) return;
      req.isUser = true;
      req.data = data;
    });
  }
  next();
};
