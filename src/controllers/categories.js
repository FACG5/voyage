
const { getCategory } = require('../model/queries/review');
const { getAvg } = require('../model/queries/review');

exports.get = (req, res, next) => {
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

  const { category } = req.params;

  getCategory(category)
    .then((response) => {
      if (response.length === 0) {
        res.render('category', {
          messageError: 'Sorry No data available',
          style: 'style',
          style_special: 'category',
          title: category,
          isUser,
          userName,
          isPerson,
        });
      } else {
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
              isPerson,
            });
          })
          .catch(error => next(error));
      }
    })
    .catch(err => next(err));
};
