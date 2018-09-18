const dbConnection = require('../database/db_connection');

const getReviews = () => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT review.id, review.content , review.evaluation , person.username , business.name FROM review JOIN person on '
    + 'review.person_id=person.id JOIN business on review.business_id=business.id ORDER BY review.id desc',
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});

const getComments = reviewId => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT comment.id, comment.person_id, comment.review_id, comment.content, person.username FROM comment JOIN person on comment.person_id=person.id WHERE comment.review_id=$1',
    values: [reviewId],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(new Error(`Error in DB ${error}`));
    return resolve(res.rows);
  });
});

const getReviewsByBusiness = businessId => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT person.username, alldata.* FROM '
      + '(SELECT review.*,eval.avg FROM '
      + '(SELECT business_id,ROUND(AVG(evaluation)) AS avg FROM review GROUP BY business_id)'
      + 'eval JOIN review on review.business_id=eval.business_id WHERE review.business_id=$1)'
      + 'alldata LEFT JOIN person ON person.id = alldata.person_id ORDER BY alldata.id DESC',
    values: [businessId],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});


const setReview = (idPerson, idBusiness, content, evaluation) => new Promise((resolve, reject) => {
  const sql = {
    text: 'INSERT INTO review (person_id, business_id, content, evaluation) VALUES ($1,$2,$3,$4)',
    values: [idPerson, idBusiness, content, evaluation],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});

const getAvg = category => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT business.*, rate.* FROM'
      + '(SELECT business_id,ROUND(AVG(evaluation)) AS avg FROM review GROUP BY business_id )'
      + ' AS rate JOIN business on business.id = rate.business_id WHERE category=$1 ORDER BY rate.avg DESC',
    values: [category],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(new Error(`Error in DB ${error}`));
    return resolve(res.rows);
  });
});

module.exports = {
  getReviews,
  getComments,
  getReviewsByBusiness,
  setReview,
  getAvg,
};
