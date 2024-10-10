const mysql = require('mysql');
const ERRORS = require('errors');


//Gestione errori del DATABASE
ERRORS.create({
  code: 601,
  name: 'QUERY_EXECUTE',
  defaultMessage: 'An error occured during the query execution'
});

ERRORS.create({
  code: 600,
  name: 'DB_CONNECTION',
  defaultMessage: 'An error occured when connecting to database'
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Dose'
});


const execute = async (sql, params, req, res) => {
  try{
    const result = await new Promise(function(resolve, reject) { 
      connection.query(sql, params, function(err, rows, fields) {
        if (err) {
          console.log(err)
          reject(err);
        }
        resolve(rows);
        
      });
    });
    return result;
  }catch(e){
    console.log(e)
    error(req, res, new ERRORS.QUERY_EXECUTE({}));
  }
}

function error(req, res, err) {
  res.status(err.code).send(err.message);
}

module.exports = {
  execute,
}
