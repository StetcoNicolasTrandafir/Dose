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

ERRORS.create({
  name: 'BAD_REQUEST',
  code: 400,
  message: 'Bad Request: some parameters are missing or in bad format'
});

ERRORS.create({
  name: 'ERRORE_DI_PROVA',
  code: 666,
  defaultMessage: 'SUUUUUUUUUUUUUUUUUUUUUUUUUCA'
});


const sendError = (req, res, err) => {
  res.status(err.code);
  res.send({error:err})
}



module.exports = {
  sendError,
  ERRORS
}
