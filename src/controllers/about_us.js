exports.get = (req, res) => {
  res.render('about_us', { style: 'style', style_special: 'about_us', title: 'About Us' });
};
