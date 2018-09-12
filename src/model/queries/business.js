const dbConnection = require('../database/db_connection');

const getSearch = name => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM business WHERE name LIKE $1',
    values: [`%${name}%`],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});

const getSearchResult = name => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM business WHERE name =$1',
    values: [name],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});

module.exports = {
  getSearch,
  getSearchResult,
};
