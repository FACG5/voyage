
const { getAvg } = require('../model/queries/review');

exports.get = (req, res, next) => {
  let userName = '';
  const { isUser } = req;
  if (isUser) {
    userName = req.data.name;
  }
  const { category } = req.params;

  getAvg(category)
    .then((response) => {
      res.render('category', {
        style: 'style',
        style_special: 'category',
        title: category,
        response,
        dom: 'categories',
        isUser,
        userName,
      });
    })
    .catch(err => next(err));
};
