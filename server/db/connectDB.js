const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongosee = require("mongoose");
const url = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongosee.connect(url);
    console.log("successfuly connected tp database");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDB;
