const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model("User")
const jwt = require('jsonwebtoken')

require('dotenv').config();

router.post('/signup',(req,res)=>{
    // res.send("This is signup page")
    const {name,email,password}=req.body
    if (!name || !email || !password){
        return res.status(422).send({error:"Please Fill All Fields"});
    }

    User.findOne({email:email}).then(async(savedUser)=>{
        if(savedUser){
            console.log(savedUser)
            return res.status(422).send({error:"Invalid Credentials"})
        }
        const user=new User({
            name,email,password
        })

        try{
            await user.save();
            // res.send({message:"User Registered Succesfully"})
            const token=jwt.sign({_id:user._id},process.env.jwt_secret)
            res.send({token})
        }catch(err){
            return res.status(422).send({error:"Filed"})
        }

    })
})

module.exports=router;