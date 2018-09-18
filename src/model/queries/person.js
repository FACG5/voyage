const dbConnection = require('../database/db_connection');

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


module.exports = { addPerson };
