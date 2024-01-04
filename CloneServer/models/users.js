const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type:String,
        required:true
    },
    Verified:{
        type:Boolean,
        default:false
    },
    addresses:[
        {
            name:String,
            mobileNo:String,
            houseNo:String,
            street:String,
            landMark:String,
            city:String,
            country:String,
            postalCode:String
        }
    ],

    orders:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Orders'
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    }
})

userSchema.pre('save',async function (next){
    const user=this;
    if(!user.isModified('password')){
        return next()
    }
    user.password= await bcrypt.hash(user.password,8)
    next();
})

const User=mongoose.model("User",userSchema);
module.exports=User