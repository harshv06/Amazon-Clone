const jwt = require('jsonwebtoken')
const mongoose=require('mongoose')
const user = mongoose.model("User")

module.exports = (req,res)=>{
    const {authorization}=req.headers
    console.log(authorization);
    next();
}