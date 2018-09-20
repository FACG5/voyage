
const { getCategory } = require('../model/queries/review');
const { getAvg } = require('../model/queries/review');

exports.get = (req, res, next) => {
  let userName = '';
  const { isUser } = req;
  if (isUser) {
    userName = req.data.name;
  }
  const { category } = req.params;

  getCategory(category)
    .then((response) => {
      getAvg(category)
        .then((result) => {
          res.render('category', {
            style: 'style',
            style_special: 'category',
            title: category,
            response,
            dom: 'categories',
            isUser,
            userName,
            result,
          });
        })
        .catch(error => next(error));
    })
    .catch(err => next(err));
};
