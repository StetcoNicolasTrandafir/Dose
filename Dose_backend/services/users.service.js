const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const fs = require('fs');

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

const TIMEOUT = 600;
const getUser = async (idUtente, req, res) => {
    let queryString = "SELECT * FROM  utenti WHERE idUtente=?";
    const result = await db.execute(queryString, [idUtente], req, res);
    return ({
        data: result,
    });
}
const login = async (mail, password, req, res) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("TEST MAIL=> " + re.test(String(mail).toLowerCase()));
    let queryString;
    if (re.test(String(mail).toLowerCase()))
        queryString = "SELECT * FROM utenti WHERE mail=?";
    else
        queryString = "SELECT * FROM utenti WHERE username=?";

    const result = await db.execute(queryString, [mail], req, res);
    if (result.length > 0) {

        const comp = await bcrypt.compare(password, result[0].password);

        if (comp) {
            let token = createToken({
                "_id": result[0].idUtente,
                "user": result[0].username
            });
            console.log("token " + token);
            return {
                "token": token,
                "data": result
            };
        } else {
            return {
                error: "Password errata"
            };
        }
    } else
        return ({
            error: "Username o mail errata"
        });

}




// function createToken(obj) {
//     let token = jwt.sign({
//             '_id': obj._id,
//             'user': obj.user,
//             'iat': Math.floor(Date.now() / 1000),
//             'exp': Math.floor(Date.now() / 1000 + TIMEOUT)
//         },
//         privateKey
//     );
//     return token;
// }

function error(req, res, err) {
    res.status(err.code).send(err.message);
}

module.exports = {
    login,
    getUser,
}