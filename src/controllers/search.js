const { getSearch } = require('../model/queries/get_data');

exports.get = ((req, response) => {
  const name = req.body.name;
  getSearch(name)
    .then(() => {
      response.render('index');
    })
    .catch(() => {
      response.send('error');
    });
});
