const bcrypt = require('bcrypt');

const saltRounds = 12;

const encrypt=async(plaintext)=> {
    try {
        const hash = await bcrypt.hash(plaintext, saltRounds);
        return hash;
    } catch (error) {
        throw new Error('Errore durante l\'hashing della password');
    }
}

const match =async (plaintext, hash)=>{
    try {
        console.log(plaintext, hash)
        const match=await bcrypt.compare(plaintext, hash);
        return match;
    } catch (error) {
        console.log(error.message)
        throw new Error('Errore durante la verifica della password');
    }
}

module.exports = {
    encrypt,
    match
};
