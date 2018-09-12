const dbConnection = require('../database/db_connection');


const getSearch = name => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM business WHERE name LIKE $1',
    values: [`%${name}%`],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    resolve(res.rows);
  });
});

const getSearchResult = name => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM business WHERE name =$1',
    values: [name],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    resolve(res.rows);
  });
});

const getReviews = () => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM review ORDER BY id desc',
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    resolve(res.rows);
  });
});

const checkUser = email => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email=$1;',
    values: [email],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) {
      return reject(new Error('Error in DB'));
    }
    return resolve(res.rows);
  });
});

module.exports = {
  getSearch,
  getSearchResult,
  getReviews,
  checkUser,
};
