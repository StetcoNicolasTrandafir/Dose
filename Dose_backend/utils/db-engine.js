const mysql = require('mysql');
const { ERRORS, sendError } = require('./errors-engine'); // Importa il modulo degli errori

// Connessione al database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Dose'
});

const execute = async (sql, params, req, res) => {
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
    return result;
  } catch (e) {
    console.log(e);
    sendError(req, res, new ERRORS.QUERY_EXECUTE({}));
  }
};

module.exports = {
  execute,
};
