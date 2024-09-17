const {
    db
} = require("../db");
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
const getCoffeById = async (id, req, res) => {
    let queryString = "SELECT * FROM  coffee_types WHERE id=?";
    const result = await db.execute(queryString, [id], req, res);
    return ({
        data: result,
    });
}
module.exports = {
    getCoffeById
}