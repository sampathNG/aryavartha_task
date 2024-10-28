const Order = require("../db/orderSchema");
const createOrder = async (req, res) => {
  const { userId, products, totalPrice, shippingAddress } = req.body;
  if (!userId || !products || totalPrice === undefined || !shippingAddress) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newOrder = new Order({
      userId,
      products,
      totalPrice,
      shippingAddress,
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "personalInfo.firstName personalInfo.email")
      .populate("products.productId", "name price");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getOrderByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ userId })
      .populate("products.productId", "name price")
      .populate("userId", "personalInfo.email");
    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user" });
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { orderStatus, paymentStatus } = req.body;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus, paymentStatus },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createOrder,
  getAllOrders,
  getOrderByUserId,
  updateOrderStatus,
  deleteOrder,
};
