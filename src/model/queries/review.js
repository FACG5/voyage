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

const getReviewsByBusiness = businessId => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT person.username, allDataReview.* FROM '
      + '(SELECT review.*,eval.avg FROM '
      + '(SELECT business_id,ROUND(AVG(evaluation)) AS avg FROM review GROUP BY business_id)'
      + 'eval JOIN review on review.business_id=eval.business_id WHERE review.business_id=$1)'
      + 'allDataReview LEFT JOIN person ON person.id = allDataReview.person_id',
    values: [businessId],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});

module.exports = {
  getReviews,
  getReviewsByBusiness,
};
