const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://localhost/users",
  { useNewUrlParser: true },
  err => {
    if (err) console.log(new Error("problem connection mongo"));
    else console.log("connection to database mongodb...");
  }
);
