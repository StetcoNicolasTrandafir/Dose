let ERRORS= require('errors');


//Gestione errori del DATABASE
ERRORS.create({
  code: 600,
  name: 'DB_CONNECTION',
  defaultMessage: 'An error occured when connecting to database'
});

ERRORS.create({
  code: 601,
  name: 'QUERY_EXECUTE',
  defaultMessage: 'An error occured during the query execution'
});

ERRORS.create({
  code: 606,
  name: 'MAIL_ALREADY_IN_THE_DB',
  defaultMessage: "The email you're trying to insert into the db are already there"
});

ERRORS.create({
  code: 607,
  name: 'NICKNAME_ALREADY_IN_THE_DB',
  defaultMessage: "The nickname you're trying to insert into the db are already there"
});


ERRORS.create({
  name: 'MISSING_PARAMETER',
  code: 400,
  defaultMessage: 'Bad Request: some parameters are missing'
});
ERRORS.create({
  name: 'BAD_FORMAT_PARAMETERS',
  code: 400,
  defaultMessage: 'Bad Request: some parameters are not in the right format'
});

ERRORS.create({
  name: 'ERRORE_DI_PROVA',
  code: 666,
  defaultMessage: 'SUUUUUUUUUUUUUUUUUUUUUUUUUCA'
});


const sendError = (req, res, err) => {
  res.status(err.code).send({error:err})
}

const sendCustomError = (req, res, err) => {
  // console.log(err)
  // console.log(err.message)
  res.status(err.code).send({messageError:err.message, name:err.name})
  // res.status(err.code).send({error:err})
}

module.exports = {
  sendError,
  sendCustomError,
  ERRORS
}
