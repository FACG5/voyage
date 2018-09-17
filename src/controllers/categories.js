const { getCategories } = require('../model/queries/get_data');

exports.get = (req, res, next) => {
  const { category } = req.params;
  getCategories(category)
    .then((response) => {
      res.render('category', {
        style: 'style', style_special: 'category', title: category, response, dom: 'categories',
      });
    })
    .catch(err => next(err));
};
