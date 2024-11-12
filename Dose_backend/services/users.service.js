const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const fs = require('fs');

const {
    db,
    token, 
    crypto
}= require("../utils/index")

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
        queryString = "SELECT * FROM users WHERE email=?";
    else
        queryString = "SELECT * FROM users WHERE nickname=?";

    const result = await db.execute(queryString, [mail], req, res);
    if (result.length > 0) {
        if(await crypto.match(password, result[0].password))
        {
            let newToken = token.createToken({
                "_id": result[0].id,
                "user": result[0].nickname
            });

            return {
                "token": newToken,
                "data": result
            };            
        }
        else
            return {error:"Wrong password"}
    } else
        return ({
            error: "Username o mail errata"
        });

}


const checkCredentials=async(req, res, mail, nickname)=>{
    let queryString= "SELECT id FROM users WHERE mail=?"
    let ris= db.execute(queryString, mail,req, res);
    if(ris.length>0){
        return false;
    }else{
        let queryString= "SELECT id FROM users WHERE nickname=?"
        let ris= db.execute(queryString, nickname,req, res);
        if(ris.length>0)
            return false;
    }
    return true;
}

const signUp=async (req, res)=>{
    const position = req.body["position"] ? req.body["position"] : null;
    const picture = req.body["picture"] ? req.body["picture"] : null;
    const name = req.body["name"] ? req.body["name"] : null;
    const surname = req.body["surname"] ? req.body["surname"] : null;
    const birthDate = req.body["birthDate"] ? req.body["birthDate"] : null;
    const nickname = req.body["nickname"] ? req.body["nickname"] : null;
    const mail = req.body["mail"] ? req.body["mail"] : null;
    const pwd = req.body["password"] ? req.body["password"] : null; 

    const hash=await crypto.encrypt(pwd);

    const queryString= "INSERT INTO users(position, picture, password, birth_date, email, nickname, surname, name)VALUES(?,?,?,?,?,?,?,?)"

    const ris=db.execute(queryString, [position,picture,hash,birthDate, mail,nickname, surname, name])
    
    let newToken = token.createToken({
        "_id": ris.insertId,
        "user": nickname
    });

    return {
        "token": newToken,
        "data": result
    };

}

module.exports = {
    login,
    signUp,
    checkCredentials,
    getUser,
}