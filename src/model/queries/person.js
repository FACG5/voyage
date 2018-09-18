const dbConnection = require('../database/db_connection');


const getPerson = name => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM person WHERE username =$1',
    values: [name],
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});

const addPerson = (userId, data) => new Promise((resolve, reject) => {
  const {
    userName, fName, lName, birthDay, gender,
  } = data;
  const sql = {
    text:
        'INSERT INTO person (user_id,username,first_name,last_name,birthday , gender) VALUES ($1, $2, $3,$4,$5,$6) ;',
    values: [userId, userName, fName, lName, birthDay, gender],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      return reject(err);
    }
    return resolve(res);
  });
});


module.exports = { addPerson, getPerson };
