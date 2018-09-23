exports.get = (req, res) => {
  let userName = '';
  let isPerson = false;
  const { isUser } = req;
  if (isUser) {
    userName = req.data.name;
    const { type } = req.data;
    if (type === 'person') {
      isPerson = true;
    }
  }
  res.render('about_us', {
    style: 'style',
    style_special: 'about_us',
    title: 'About Us',
    userName,
    isUser,
    isPerson,
  });
};
