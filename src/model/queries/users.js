const dbConnection = require('../database/db_connection');

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

const addUser = (email, password, type) => new Promise((resolve, reject) => {
  const sql = {
    text:
        'INSERT INTO users (email, password,type) VALUES ($1, $2, $3) RETURNING id ;',
    values: [email, password, type]
  };
  dbconnection.query(sql, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
});

module.exports = {
  checkUser,addUser,
};
