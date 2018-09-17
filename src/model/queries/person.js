const dbConnection = require('../database/db_connection');

const getPerson = name => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM person WHERE username =$1',
    values: [name],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});


module.exports = { getPerson };
