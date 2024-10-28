const express = require("express");
const router = express.Router();
const {
  createCart,
  getAllCarts,
  getCartByUserId,
  updateCart,
  deleteCart,
} = require("../controller/cartController");
const authAdmin = require("../utils/authorization");
const auth = require("../utils/authentication");
router.post("/cart", auth, createCart);
router.get("/cart", auth, getAllCarts);
router.get("/cart:userId", auth, getCartByUserId);
router.put("/cart:cartId", auth, updateCart);
router.delete("/cart:cartId", auth, deleteCart);
module.exports = router;
