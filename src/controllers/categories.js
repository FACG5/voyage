const { getCategories } = require('../model/queries/get_data');

exports.get = (req, res) => {
  const { category } = req.params;
  getCategories(category)
    .then((response) => {
      res.render('category', { response, style: 'category', title: category });
    })
    .catch(err => res.send(`error : ${err}`));
};
