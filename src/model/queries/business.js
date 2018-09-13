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

const addBusiness = (userId, data) => new Promise((resolve, reject) => {
  const {
    businessName, businessAddress, businessDescription, image, businessCategory,
  } = data;
  const sql = {
    text:
        'INSERT INTO business (user_id,name,address,description,img , category) VALUES ($1, $2, $3,$4,$5,$6) ;',
    values: [userId, businessName, businessAddress, businessDescription, image, businessCategory],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
});

module.exports = {
  getSearch,
  getSearchResult,
  addBusiness,
};
