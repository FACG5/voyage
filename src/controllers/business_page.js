
exports.get = (req, res) => {
  const { name } = req.query;
  res.render('business_page', { style: 'style', title: 'business', name });
};
