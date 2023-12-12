const express=require('express');
const cors=require('cors')

const port = 4000;
const app=express();
const bodyParser=require('body-parser')

app.use(cors())
app.use(bodyParser.json())

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
