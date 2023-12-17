const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
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
      user: process.env.userID,
      pass: process.env.passID,
    },
  });

  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Verify Your Amazon Account",
    text: `Please Enter This code to verify you're account ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("sent");
  } catch (err) {
    console.log("Error while sending mail ", err);
  }
};

router.post("/register", (req, res) => {
  try {
    const { name, email, password,Verified } = req.body;
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
          Verified
        });
        try {
          await user.save();
          const token = jwt.sign({ _id: user._id }, process.env.jwt_secret);
          res.status(200).send({message:"Registration Done"});
        } catch (err) {
          return res.status(422).send({ error: "Failed while saving user" });
        }
      }
    });
  } catch (err) {
    res.status(500).send({ error: "Error in registering" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    console.log(email, password);
    return res.status(422).send({ error: "Pease Fill All The Fields" });
  }

  const savedUser = await User.findOne({ email: email });

  if (!savedUser) {
    return res.status(422).send({ error: "Invalid Credentials" });
  }

  try {
    bcrypt.compare(password, savedUser.password, (err, result) => {
      if (result) {
        console.log("Logged In");
        return res.status(422).send({ message: "Logged IN" });
      } else {
        return res.status(422).send({ message: "Invalid Credentials2" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/verify", async (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }).then(async (savedUser) => {
    if (savedUser) {
      return res.status(500).send({ error: "User Already Exists" });
    }
    try {
      let VerificationCode = Math.floor(100000 + Math.random() * 900000);
      let user = [name, email, password, VerificationCode];
      console.log(VerificationCode);
      await sendVerificationEmail(email, VerificationCode);
      return res.status(200).send({ message: "Mail Sent To User", data: user });
    } catch (err) {
      console.log("failed sending mail");
    }
  });
});

module.exports = router;
