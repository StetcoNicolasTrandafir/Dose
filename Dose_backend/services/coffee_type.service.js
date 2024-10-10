const {
    db
}= require("../utils/index")
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


const getCoffeeById = async (req, res,id) => {
    let queryString = "SELECT * FROM  coffee_type WHERE id=?";
    const result = await db.execute(queryString, [id], req, res);
    return ({
        data: result,
    });
}

const addCoffee = async (req, res,variety, name, productor, origin, region, altitude, process, roastingDay, roastingDegree, roaster, harvestDate) => {
    let queryString = "INSERT INTO coffee_type(name, productor, origin, region, altitude, variety, process, roasting_day, roasting_degree, roaster, harvest_date) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    const result = await db.execute(queryString, [name, productor, origin, region, altitude, variety, process, roastingDay, roastingDegree, roaster, harvestDate], req, res);
    return ({
        data: result,
    });
}

const deleteCoffee= async(req, res, id)=>{
    let queryString="DELETE FROM coffee_type WHERE id=?"
    const result = await db.execute(queryString, [id], req, res);
    return ({
        data: result,
    });
}


const getAllCoffees=async(req, res)=>{
    let queryString="SELECT * FROM coffee_type"
    const result = await db.execute(queryString, [], req, res);
    return ({
        data: result,
    });
}


const prova= async(req, res)=>{
    const result = await db.execute("SELECT id FROM coffee_type", [], req, res)
    
    return({data:result})
}



module.exports = {
    getCoffeeById,
    addCoffee,
    deleteCoffee,
    getAllCoffees,

    prova
}