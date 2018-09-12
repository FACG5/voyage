const dbconnection = require('../database/db_connection');

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

const addPerson = (user_id,username, first_name, last_name, birthday, gender) => new Promise((resolve, reject) => {
  const sql = {
    text:
        'INSERT INTO person (user_id,username,first_name,last_name,birthday , gender) VALUES ($1, $2, $3,$4,$5,$6) ;',
    values: [user_id,username, first_name, last_name, birthday, gender],
  };
  dbconnection.query(sql, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
});

const addBusiness = (user_id,name, address, description, img, category) => new Promise((resolve, reject) => {
  const sql = {
    text:
        'INSERT INTO business (user_id,name,address,description,img , category) VALUES ($1, $2, $3,$4,$5,$6) ;',
    values: [user_id,name, address, description, img, category],
  };
  dbconnection.query(sql, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
});

module.exports = { addUser,addPerson,addBusiness};
