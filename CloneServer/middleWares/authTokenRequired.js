const jwt = require('jsonwebtoken')
const mongoose=require('mongoose')
const user = mongoose.model("User")
require('dotenv').config()

module.exports = (req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
        return res.status(401).send({error:"You must be logged in"})
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,process.env.jwt_secret,async(err,payload)=>{
        if(err){
            return res.status(401).send({error:"Token Invalid"})
        }

        const {_id}=payload
        user.findById(_id).then(userdata=>{
            req.user=userdata
            next();
        })
    })
}