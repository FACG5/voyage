const { getCategories } = require('../model/queries/get_data');

exports.get = (req, res) => {
  const { category } = req.params;
  getCategories(category)
    .then((response) => {
      res.render('category', {
      style: 'style', style_special: 'category', title: category , response,
      });
    })
    .catch(err => res.send(`error : ${err}`));
};
