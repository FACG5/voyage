exports.get = (req, res) => {
  if (req.is_user) {
    res.redirect('/');
  } else {
    res.render('sign_up', {
      style: 'style', dom: 'sign-up', title: 'sign up',
    });
  }
};
