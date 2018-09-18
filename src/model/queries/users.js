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

const getName = (type, id) => new Promise((resolve, reject) => {
  let sql;
  if (type === 'person') {
    sql = {
      text: 'SELECT username FROM person WHERE user_id=$1;',
      values: [id],
    };
  } else {
    sql = {
      text: 'SELECT name FROM business WHERE user_id=$1;',
      values: [id],
    };
  }
  dbConnection.query(sql, (error, res) => {
    if (error) {
      return reject(error);
    }
    if (type === 'person') {
      return resolve(res.rows[0].username);
    }
    return resolve(res.rows[0].name);
  });
});

module.exports = {
  checkUser, getName,
};
