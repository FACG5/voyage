const { getSearch } = require('../model/queries/business');
const { getReviews } = require('../model/queries/review');
const { getComments } = require('../model/queries/review');

exports.get = (req, res, next) => {
  getReviews()
    .then((response) => {
      response.forEach((element) => {
        getComments(element.id)
          .then((resComment) => {
            if (resComment.length !== 0) {
              res.render('home', {
                style: 'style', title: 'Home', dom: 'home', response, resComment,
              });
            }
          })
          .catch(err => res.send(`Fild : ${err}`));
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
