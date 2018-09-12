const dbConnection = require('../database/db_connection');

const getCategories = category => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM business WHERE category = $1',
    values: [category],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      return reject(new Error(`Error in DB and ${err}`));
    }
    return resolve(res.rows);
  });
});

module.exports = { getCategories };
