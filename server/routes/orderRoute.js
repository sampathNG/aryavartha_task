const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderByUserId,
  updateOrderStatus,
  deleteOrder,
} = require("../controller/orderController");
const authAdmin = require("../utils/authorization");
const auth = require("../utils/authentication");
router.post("/order", auth, createOrder);
router.get("/order", authAdmin, getAllOrders);
router.get("/order:userId", auth, getOrderByUserId);
router.put("/order:orderId", auth, updateOrderStatus);
router.delete("/order:orderId", auth, deleteOrder);
module.exports = router;
