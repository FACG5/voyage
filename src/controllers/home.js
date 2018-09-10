const { getSearch } = require('../model/queries/get_data');

exports.get = (req, res) => {
  res.render('home', { style: 'style', title: 'Home', dom: 'home' });
};

exports.post = (req, res ,next) => {
  // console.log(req.body.name);
  const search = req.body.name;
  getSearch(search)
    .then((response) => {
      const arr = [];
      const newArr = response.filter((item) => {
        arr.push(item.name);
        return item.name;
      });
      res.send(arr);
    })
    .catch(err => res.send( 'Fild :'+ err));

};