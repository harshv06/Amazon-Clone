const mongoose = require('mongoose');
require("dotenv").config();

mongoose
  .connect(process.env.mongo_url)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error In connecting")
    console.log(err);
  });
