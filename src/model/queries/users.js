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

const getUserData = username => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT person.* , users.email FROM person JOIN users ON person.user_id = users.id WHERE username=$1',
    values: [username],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) {
      return reject(new Error('Error in DB'));
    }
    return resolve(res.rows);
  });
});

const getReviewByUser = username => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT person.user_id, person.username, review.content, review.evaluation, business.user_id, business.name FROM person JOIN review ON person.id = review.person_id JOIN business ON  business.id= review.business_id WHERE person.username=$1',
    values: [username],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) {
      return reject(new Error('Error in DB'));
    }
    return resolve(res.rows);
  });
});

module.exports = {
  checkUser,
  getUserData,
  getReviewByUser,
};
