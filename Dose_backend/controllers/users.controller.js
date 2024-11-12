const {
  usersService
} = require("../services")

const{errors}=require("../utils")
//Gestione errori del TOKEN



const prova = async (req, res, next) => {
  res.send({
    data: "funanzia"
  })
}

const login = async (req, res, next) => {

  const id = req.body["mail"];
  const pwd = req.body["password"];

  if(!id||!pwd)
    return errors.sendCustomError(req, res, new errors.ERRORS.MISSING_PARAMETER({}));
 
  try {
    const risultato = await usersService.login(id, pwd, req, res);
    // console.log("risultato", risultato);
    res.status(200).send(risultato);
  } catch (e) {
    console.log("ERRORE INASPETTATO NON CUSTOM DA GESTIRE")
    console.log(e.message)
    errors.sendError(req, res, e)
  }
}

const signUp=async(req, res, next)=>{
  const mail = req.body["mail"];
  const pwd = req.body["password"];
  const nickname=req.body["username"] 
  const birthDate=req.body["birthDate"]
  const name=req.body["name"]
  const surname=req.body["surname"]

  if(!mail||!pwd||!nickname||!birthDate||!name||!surname)
    return errors.sendCustomError(req, res, new errors.ERRORS.MISSING_PARAMETER({}));

  try {
    if(await usersService.checkCredentials(req, res, mail, nickname))
    {
      const ris= await usersService.signUp(req, res);
      console.log("Result: ", ris);
      res.status(200).send(ris);
    }else
    {
      errors.ERRORS.sendCustomError(req, res, error.ERRORS.DATA_ALREADY_IN_THE_DB({}))
    }
    
  } catch (e) {
    console.log("ERRORE INASPETTATO NON CUSTOM DA GESTIRE")
    console.log(e.message)
    errors.sendError(req, res, e)
  }
  
}



const getUser = async (req, res, next) => {

  
  try {
    let ctrlToken = await controllaToken(req, res);
    let id = ctrlToken.payload._id;
    const risultato = await usersService.getUser(id, req, res);
    res.status(200).send(risultato);

    next();
  } catch (e) {
    console.log("test");
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}


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
    errors.sendCustomError(req, res, new errors.ERRORS.TOKEN_DOESNT_EXIST({}));
  }
}

module.exports = {
  login,
  getUser,
  controlloToken,
  signUp,
  prova,
}
