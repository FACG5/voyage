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

const addUser = (data, hash) => new Promise((resolve, reject) => {
  const { email, type } = data;
  const sql = {
    text:
        'INSERT INTO users (email, password,type) VALUES ($1, $2, $3) RETURNING id ;',
    values: [email, hash, type],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      reject(err);
    }
    resolve(res);
  });
});

module.exports = {
  checkUser, addUser,
};
