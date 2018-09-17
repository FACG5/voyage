const { getCategories } = require('../model/queries/get_data');

exports.get = (req, res, next) => {
  let userName = '';
  const { isUser } = req;
  if (isUser) {
    userName = req.data.name;
  }
  const { category } = req.params;
  getCategories(category)
    .then((response) => {
      res.render('category', {
        style: 'style', style_special: 'category', title: category, response, isUser, userName,
      });
    })
    .catch(err => next(err));
};
