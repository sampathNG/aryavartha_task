require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", require("./routes/userRoute"));
app.use("/", require("./routes/productRoute"));
app.use("/", require("./routes/cartRoute"));
app.use("/", require("./routes/orderRoute"));
app.use("/", require("./routes/paymentRoute"));
app.get("/", (req, res) => {
  try {
    res.send("server is running");
  } catch (error) {
    res.send(error.message);
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
