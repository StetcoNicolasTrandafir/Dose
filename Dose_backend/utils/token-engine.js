const { ERRORS, sendError } = require('./errors-engine'); // Importa il modulo degli errori
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = 'fs.readFileSync("./keys/private.key", "utf8")';


const controlloToken = async (req, res, next) => {
  let ctrlToken = await controllaToken(req, res);
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
    sendError(req, res, new ERRORS.TOKEN_DOESNT_EXIST({}));
  }
};

async function controllaToken(req, res) {
  let ctrlToken = {
    allow: false,
    payload: {}
  };

  if (!req.headers["token"]) {
    sendError(req, res, new ERRORS.TOKEN_DOESNT_EXIST({}));
  } else {
    let token = req.headers["token"].split(' ')[1];

    if (token) {
      let result;
      try {
        result = await jwt.verify(token, privateKey);
        console.log(result)
      } catch (ex) {
        console.log(ex);
      }

      ctrlToken.allow = true;
      if (result) {
        ctrlToken.payload = result;
      } else {
        ctrlToken.payload = {
          "err_iat": true,
          "message": "Token scaduto"
        };
        sendError(req, res, new ERRORS.TOKEN_EXPIRED({}));
      }
    }
  }
  return ctrlToken;
}

function createToken(obj) {
  console.log(obj._id)
  let token = jwt.sign({
      '_id': obj._id,
      'user': obj.user,
      'iat': Math.floor(Date.now() / 1000),
      'exp': Math.floor(Date.now() / 1000 + 9999999)
    },
    privateKey
  );
  return token;
}

module.exports = {
  controlloToken,
  controllaToken,
  createToken
};
