const express=require('express');
const cors=require('cors')
const crypto=require('crypto')
const port = 4000;
const app=express();
const bodyParser=require('body-parser')
const jwt=require('jsonwebtoken')
app.use(cors())
app.use(bodyParser.json())
require('dotenv').config()
require('./db')
require('./models/users')

const authRoutes=require('./routes/authRoutes')
const authTokenRequired=require('./middleWares/authTokenRequired')
app.use(authRoutes)
app.get('/',authTokenRequired,(req,res)=>{
    res.send(req.user)
})


app.listen(port,()=>{
    console.log("Server is started")
})
