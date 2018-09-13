const dbconnection = require('../database/db_connection');

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


module.exports = { addPerson }
