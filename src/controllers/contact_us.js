exports.get = (req, res) => {
  let userName = '';
  const { isUser } = req;
  if (isUser) {
    userName = req.data.name;
  }

  res.render('contact_us', {
    style: 'style',
    style_special: 'contact_us',
    dom: 'contact_us',
    title: 'Contact Us',
    userName,
    isUser,
  });
};
