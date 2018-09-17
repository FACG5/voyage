exports.get = (req, res) => {
  res.render('contact_us', {
    style: 'style', style_special: 'contact_us', dom: 'contact_us', title: 'Contact Us',
  });
};
