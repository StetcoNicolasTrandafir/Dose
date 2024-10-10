const {
  coffee_typeService
} = require("../services")

const jwt = require("jsonwebtoken");
const fs = require("fs");
// const privateKey = fs.readFileSync("keys/private.key", "utf8");
const ERRORS = require('errors');


ERRORS.create({
  name: 'BAD_REQUEST',
  code: 400,
  message: 'Bad Request: some parameters are missing or in bad format'
});

const addCoffee = async (req, res, next) => {
  try {
    const variety = req.body["variety"];
    const name = req.body["name"];
    const productor = req.body["productor"];
    const origin = req.body["origin"];
    const region = req.body["region"];
    const altitude = req.body["altitude"];
    const process= req.body["process"];
    const roastingDay = req.body["roastingDay"];
    const roastingDegree= req.body["roastingDegree"];
    const roaster = req.body["roaster"];
    const harvestDate= req.body["harvestDate"];
    

    
    if(name==null)
      return error(req, res, new ERRORS.BAD_REQUEST({}));
    
      const risultato = await coffee_typeService.addCoffee(req, res, 
          variety, name, productor, origin, region, altitude, process, roastingDay, roastingDegree, roaster, harvestDate);
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
        return error(req, res, new ERRORS.BAD_REQUEST({}));
  
    const risultato = await coffee_typeService.getCoffeeById(req, res,id);
    res.send(risultato);
    // next();
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const deleteCoffee = async (req, res, next) => {
  
  try {
    const id = req.body["id"];

    console.log(id)
    if(!id)
        return error(req, res, new ERRORS.BAD_REQUEST({}));
  
    const risultato = await coffee_typeService.deleteCoffee(req, res, id);
    res.send(risultato);
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const getAllCoffees=async(req, res, next)=>{
  try {  
    const risultato = await coffee_typeService.getAllCoffees(req, res);
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
  addCoffee,
  getById, 
  deleteCoffee,
  getAllCoffees,
  
  prova
}
