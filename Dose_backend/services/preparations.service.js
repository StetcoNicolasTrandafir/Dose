const {
    db
}= require("../myFunctions/index")
const ERRORS = require('errors');

ERRORS.create({
    code: 602,
    name: 'HASH',
    defaultMessage: 'An error occured crypting your data'
});

ERRORS.create({
    code: 606,
    name: 'HASH_COMPARE',
    defaultMessage: 'An error occured comparing hashes'
});


const getPrepById = async (req, res,id) => {
    let queryString = "SELECT * FROM  coffee_type WHERE id=?";
    const result = await db.execute(queryString, [id], req, res);
    return ({
        data: result,
    });
}

const addPrep = async (req, res,coffeeType_id,method, grCoffe,mlWater, tdsWater, temperatureWaterWater,granularity, notes, ownerId) => {
    let queryString = "INSERT INTO preparation(method,gr_coffee, ml_water, water_tds,water_temperature,granularity,notes,coffee_type_id, creation_date,owner_id) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const result = await db.execute(queryString, [method, grCoffe,mlWater, tdsWater, temperatureWaterWater,granularity, notes, coffeeType_id,new Date().toLocaleString(),ownerId], req, res);
    return ({
        data: result,
    });
}

const deleteCoffe= async(req, res, id)=>{
    let queryString="DELETE FROM coffee_type WHERE id=?"
    const result = await db.execute(queryString, [id], req, res);
    return ({
        data: result,
    });
}




const prova= async(req, res)=>{
    const result = await db.execute("SELECT * FROM coffee_type", [], req, res)
    
    return({data:result})
}



module.exports = {
    getCoffeById,
    addCoffe,
    deleteCoffe,
    
    prova
}