const dbConnection = require('../database/db_connection');

const checkUser = (email) => new Promise((resolve, reject) => {
    const sql = {
        text: "SELECT * FROM users WHERE email=$1;",
        values: [email]
    };
    dbConnection.query(sql, (error, res) => {
        if (error) {
          return reject(new TypeError("Error in DB"));
        }
        resolve(res.rows);
    });
});

module.exports= { checkUser };
