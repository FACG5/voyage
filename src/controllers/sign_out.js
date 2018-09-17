exports.signout = (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
};
