const { getSearch } = require('../model/queries/business');
const { getReviews } = require('../model/queries/review');
const { getComments } = require('../model/queries/review');

exports.get = (req, res, next) => {
  getReviews()
    .then((response) => {
      res.render('home', {
        style: 'style', title: 'Home', dom: 'home', response,
      });
    })
    .catch(err => next(err));
};

exports.post = (req, res, next) => {
  const { name } = req.body;
  getSearch(name)
    .then((response) => {
      const arr = [];
      response.filter((item) => {
        arr.push(item.name);
        return item.name;
      });
      res.send(arr);
    })
    .catch(err => next(err));
};

exports.getComments = (req,res,next) => {
  getComments(id)
  .then((response)=>console.log(req))
  .catch(err => next(err));
};
