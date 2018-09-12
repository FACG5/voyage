const { getCategories } = require('../model/queries/get_data');

exports.get = (req, res) => {
  const { category } = req.params;
  getCategories(category)
    .then((response) => {
      console.log(res);
      res.render('category', { response, style: 'style', title: category});
    })
    .catch(err => console.log(`err : ${err}`));

};
