const express=require('express');

const port = 3000;
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser.json())

require('./db')
require('./models/users')

const authRoutes=require('./routes/authRoutes')
const authTokenRequired=require('./middleWares/authTokenRequired')
app.use(authRoutes)
app.get('/',(req,res)=>{
    res.send("This is Login page")
})


app.listen(port,()=>{
    console.log("Server is started")
})
