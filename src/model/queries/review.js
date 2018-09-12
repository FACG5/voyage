const dbConnection = require('../database/db_connection');

const getReviews = () => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM review ORDER BY id desc',
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});

module.exports = {
  getReviews,
};
