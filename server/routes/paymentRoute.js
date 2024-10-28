const express = require("express");
const { createPaymentIntent } = require("../controller/paymentController");
const router = express.Router();
const authAdmin = require("../utils/authorization");
const auth = require("../utils/authentication");

router.post("/payment", auth, createPaymentIntent);

module.exports = router;
