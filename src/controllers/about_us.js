exports.get = (req, res) => {
  let userName = '';
  const { isUser } = req;
  if (isUser) {
    userName = req.data.name;
  }
  res.render('about_us', {
    style: 'style',
    style_special: 'about_us',
    title: 'About Us',
    userName,
    isUser,
  });
};
