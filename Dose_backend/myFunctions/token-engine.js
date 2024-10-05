const ERRORS = require('errors');
//TODO da mettere in un modulo a parte
const controlloToken = async (req, res, next) => {
  let ctrlToken = await controllaToken(req, res);
  //console.log(ctrlToken);
  if (ctrlToken.allow && !ctrlToken.payload.err_iat) {
    let token = createToken({
      "_id": ctrlToken.payload._id,
      "user": ctrlToken.payload.user
    });
    res.send({
      "data": "TOKEN OK",
      token: token
    });
  } else {
    error(req, res, new ERRORS.TOKEN_DOESNT_EXIST({}));
  }
}


async function controllaToken(req, res) {
  
  let ctrlToken = {
    allow: false,
    payload: {}
  };

  // lettura token
  if (req.headers["token"] == undefined) {
    error(req, res, new ERRORS.TOKEN_DOESNT_EXIST({}));
  } else {
    let token = req.headers["token"].split(' ')[1];
    
    //console.log(token + " - " + typeof (token));

    if (token != "undefined" && token != "null") {

      let result;
      try {
        result = await jwt.verify(token, privateKey);
      } catch (ex) {
        console.log(ex);
      }

      ctrlToken.allow = true;
      if (result) {
        //ctrlToken.allow=true;
        ctrlToken.payload = result;
      } else {
        ctrlToken.payload = {
          "err_iat": true,
          "message": "Token scaduto"
        };
        error(req, res, new ERRORS.TOKEN_EXPIRED({}));
      }
    }
  }
  return ctrlToken;
}


function createToken(obj) {
  let token = jwt.sign({
          '_id': obj._id,
          'user': obj.user,
          'iat': Math.floor(Date.now() / 1000),
          'exp': Math.floor(Date.now() / 1000 + TIMEOUT)
      },
      privateKey
  );
  return token;
}


function error(req, res, err) {
  res.status(err.code).send(err.message);
}

module.exports = {
  createToken,
}
