
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
    // console.log(result, id)
    // if(result[0]&&result[0].harvest_date&&result[0].roasting_day)
    // {
    //     console.log(result[0].harvest_date,result[0].roasting_day)
    //     result[0].harvest_date  = result[0].harvest_date.toLocaleDateString('it-IT');
    //     result[0].roasting_day  = result[0].roasting_day.toLocaleDateString('it-IT');
    // }
    // console.log(result)
    return ({
        data: result,
    });
}

const addCoffee = async (req, res,variety, name, productor, origin, region, altitude, process, roastingDay, roastingDegree, roaster, harvestDate) => {
    
    let queryString = "INSERT INTO coffee_type(name, productor, origin, region, altitude, variety, process, roasting_day, roasting_degree, roaster, harvest_date) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    // const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    // if(roastingDay && !regex.test(roastingDay))
    // {
    //     // console.log(roastingDay)
    //     roastingDay=roastingDay.toLocaleDateString('it-IT')
    // }
    // if(harvestDate)
    //     harvestDate=harvestDate.toLocaleDateString('it-IT')

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

const updateCoffee = async(req, res,variety, name, productor, origin, region, altitude, process, roastingDay, roastingDegree, roaster, harvestDate, id) => {
    //let queryString = "UDPATE coffee_type SET(name, productor, origin, region, altitude, variety, process, roasting_day, roasting_degree, roaster, harvest_date) "
    let queryString = "UPDATE coffee_type SET name = ?, productor = ?, origin = ?, region= ?, altitude = ?, variety = ?, process = ?, roasting_day = ?, roasting_degree = ?, roaster = ?, harvest_date = ? WHERE Id = ?"
    const result = await db.execute(queryString,[name, productor, origin, region, altitude, variety, process, roastingDay, roastingDegree, roaster, harvestDate, id], req, res);
    let response;
    if(result["affectedRows"]==0)
        return({data:"Coffe type not found"})
    else
        return({data:id})
}

const prova= async(req, res)=>{
    // const result = await db.execute("SELECT id FROM coffee_type", [], req, res)
    
    return({data:"OK"})
}



module.exports = {
    getCoffeeById,
    addCoffee,
    deleteCoffee,
    getAllCoffees,
    updateCoffee,
    prova
}