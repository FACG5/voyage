const { getSearch, getReviews } = require('../model/queries/get_data');

exports.get = (req, res) => {
  res.render('home', { style: 'style', title: 'Home', dom: 'home' });
};

exports.post = (req, res) => {
  const search = req.body.name;
  getSearch(search)
    .then((response) => {
      const arr = [];
      response.filter((item) => {
        arr.push(item.name);
        return item.name;
      });
      res.send(arr);
    })
    .catch(err => res.send(`Fild : ${ err}`));
};

exports.postReviews = (req, res) => {
  const { review } = req.body.content; 
  getReviews(review)
    .then(res.send(review))
    .catch(err => res.send(`Fild : ${ err}`));
};
