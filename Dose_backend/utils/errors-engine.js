// const ERRORS = require('errors');

// ERRORS.create({
//   name: 'BAD_REQUEST',
//   code: 400,
//   message: 'Bad Request: some parameters are missing or in bad format'
// });


const sendError= (req, res, err) =>{
    res.status(400);
    res.send({
      error:"err.name",
      // data:err.message
    });
    // res.status(err.code).send(err.message);
  }
  

  module.exports=[
    sendError
  ]