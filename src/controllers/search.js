const { getSearch } = require('../model/queries/get_data');

exports.get = (req, response) => {
  const data = req.body;
  const name = data.name;
  getSearch(name)
    .then((res) => {
      response.render('index');
    })
    .catch((error) => {
      response.send('error');
    });
};
