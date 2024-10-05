const {
  coffee_typeService,
  preparationService
} = require("../services")
const jwt = require("jsonwebtoken");
const fs = require("fs");
// const privateKey = fs.readFileSync("keys/private.key", "utf8");
const ERRORS = require('errors');
const {
  crypto
} = require("../crypto");
const { nextTick } = require("process");
const { log } = require("console");

ERRORS.create({
  name: 'BAD_REQUEST',
  code: 400,
  message: 'Bad Request: some parameters are missing or in bad format'
});

const addPrep = async (req, res, next) => {
  try {    

    const method= req.body["method"]
    if(method==null)
      return error(req, res, new ERRORS.BAD_REQUEST({}));

    const coffeeType_id = req.body["coffeeType_id"];
    if(isNaN(coffeeType_id))
      return error(req, res, new ERRORS.BAD_REQUEST({}));
    
    //NOTE obbligatorio?
    const grCoffee = req.body["grCoffe"];
    // if(isNaN(grCoffee))
    //   return error(req, res, new ERRORS.BAD_REQUEST({}));
    const mlWater = req.body["mlWater"];
    const tdsWater = req.body["tdsWater"];
    const temperatureWaterWater = req.body["temperatureWater"];
    const granularity= req.body["granularity"]
    const notes= req.body["notes"]


    //TODO  prendere owner_id dal token
    const ownerId=1;

      const risultato = await preparationService.addPrep(req, res, coffeeType_id,method, grCoffe,mlWater, tdsWater, temperatureWaterWater,
        granularity, notes,ownerId
       );
      res.send(risultato);
      // next();
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
}

const prova= async(req, res, next)=> {
  const ris= await coffee_typeService.prova(req, res)
  res.send(ris)
}

const getById = async (req, res, next) => {
  
  try {
    const id = req.query["id"];

    if(!id)
        error(req, res, new ERRORS.BAD_REQUEST({}));
  
    const risultato = await coffee_typeService.getCoffeById(req, res,id);
    res.send(risultato);
    // next();
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const deleteCoffe = async (req, res, next) => {
  
  try {
    const id = req.body["id"];

    console.log(id)
    if(!id)
        error(req, res, new ERRORS.BAD_REQUEST({}));
  
    const risultato = await coffee_typeService.deleteCoffe(req, res, id);
    res.send(risultato);
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}


function error(req, res, err) {
  res.status(err.code).send(err.message);
}


module.exports = {
  addPrep,
  getById, 
  deleteCoffe,
  
  
  prova
}
