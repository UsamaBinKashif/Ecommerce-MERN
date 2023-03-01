const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {connectToDB};
