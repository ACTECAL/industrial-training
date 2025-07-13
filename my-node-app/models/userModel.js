const db = require('../config/db');
const insertUser = async (name,mobile,email,hashPassword,role)=>{
    try{
    const query = "INSERT INTO signup (name,mobile,email,password,role) VALUES (?,?,?,?,?)";
    const rows = await db.query(query,[name,mobile,email,hashPassword,role]);
    return rows[0];
}catch(error){
    console.log('error insertion',error);
    return null;
}
};

const findUserByEmail = async(email)=>{
    try{
    const query = "SELECT * FROM signup WHERE email = ?";
    const rows = await db.query(query,[email]);
    return rows[0] && rows[0][0];
    }catch(error){
        console.log('error selection',error);
        return null;
    }
};
module.exports = {insertUser,findUserByEmail};