const { getCategories } = require('../model/queries/get_data');

exports.get = (req, res, next) => {
  const { category } = req.params;
  getCategories(category)
    .then((response) => {
      res.render('category', {
        req, style: 'style', style_special: 'category', title: category, response,
      });
    })
    .catch(err => next(err));
};
