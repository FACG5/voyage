const dbConnection = require('../database/db_connection');

const setComment = (personId, reviewId, content) => new Promise((resolve, reject) => {
  const sql = {
    text: 'INSERT INTO comment (person_id, review_id, content) VALUES ($1,$2,$3);',
    values: [personId, reviewId, content],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) {
      return reject(error);
    }
    return resolve(res.rows);
  });
});

const getComment = reviewId => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT person.username, comment.content, comment.id FROM comment JOIN person ON comment.person_id=person.id WHERE comment.review_id = $1 ORDER BY comment.id ASC',
    values: [reviewId],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) {
      return reject(error);
    }
    return resolve(res.rows);
  });
});

module.exports = {
  setComment,
  getComment,

};
