const { getSearch } = require('../model/queries/business');
const { getReviews } = require('../model/queries/review');

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
  getReviews()
    .then((response) => {
      res.render('home', {
        style: 'style',
        style_special: 'home',
        title: 'Home',
        dom: 'home',
        comment: 'comment',
        isUser,
        userName,
        isPerson,
        response,
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
    .catch(err => res.send(`Fild : ${err}`));
};

exports.postReviews = (req, res) => {
  const { review } = req.body.content;
  getReviews(review)
    .then(res.send(review))
    .catch(err => res.send(`Fild : ${err}`));
};
