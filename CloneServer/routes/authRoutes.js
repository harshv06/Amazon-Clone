const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

require("dotenv").config();

const sendVerificationEmail = async (email, code) => {
  const transporter = nodemailer.createTransport({
    service: "gmail.com",
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    requireTLS: true,
    auth: {
      user: "vishwakarmah45@gmail.com",
      pass: "iyduvovwtpiuarhn",
    },
  });

  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Verify Your Amazon Account",
    text: `Please Click the following link to verify your email : http://192.168.0.108:4000/verify/${code}`
  };

  try{
	await transporter.sendMail(mailOptions)
  }catch(err){
	console.log("Error while sending mail ",err)
  }
};

router.post("/register", (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(422).send({ error: "Please Fill All Fields" });
    }

    User.findOne({ email: email }).then(async (savedUser) => {
      if (savedUser) {
        console.log(savedUser);
        return res.status(422).send({ error: "Invalid Credentials" });
      } else {
        const user = new User({
          name,
          email,
          password,
        });
        try {
          user.VerificationCode = crypto.randomBytes(20).toString("hex");
          await user.save();
          // const token = jwt.sign({ _id: user._id }, process.env.jwt_secret);
          // res.send({ token });

          sendVerificationEmail(user.email, user.VerificationCode);
        } catch (err) {
          return res.status(422).send({ error: "Filed while saving user" });
        }
      }
    });
  } catch (err) {
    console.log("Error in registering");
    res.status(500).json({ error: "Error in registering" });
  }
  // res.send("This is signup page")
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    console.log(email, password);
    return res.status(422).json({ error: "Pease Fill All The Fields" });
  }

  const savedUser = await User.findOne({ email: email });

  if (!savedUser) {
    return res.status(422).json({ error: "Invalid Credentials" });
  }

  try {
    bcrypt.compare(password, savedUser.password, (err, result) => {
      if (result) {
        console.log("Logged In");
        return res.status(422).json({ message: "Logged IN" });
      } else {
        return res.status(422).json({ message: "Invalid Credentials2" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/verify/:token',async(req,res)=>{
	const token=req.params.token
	const user = await User.findOne({VerificationCode:token})
	if(!user){
		return res.status(500).json({error:"Invalid Verification Link Please Try Again"})
	}else{
		user.Verified=true
		user.VerificationCode=undefined
		await user.save()
		res.status(200).json({message:"Email Verified Succesfully"})
	}
})

module.exports = router;
