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

  res.render('contact_us', {
    style: 'style',
    style_special: 'contact_us',
    dom: 'contact_us',
    title: 'Contact Us',
    userName,
    isUser,
    isPerson,
  });
};
