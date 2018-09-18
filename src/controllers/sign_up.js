exports.get = (req, res) => {
  if (req.isUser) {
    res.redirect('/');
  } else {
    res.render('sign_up', {
      style: 'style', dom: 'sign-up', title: 'sign up',
    });
  }
};
