const Cart = require("../db/cartSchema");
const createCart = async (req, res) => {
  const { userId, products, totalPrice } = req.body;
  if (!userId || !products || totalPrice === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newCart = new Cart({ userId, products, totalPrice });
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate("userId products.productId");
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCartByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCart = async (req, res) => {
  const { cartId } = req.params;
  const { products, totalPrice } = req.body;
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      cartId,
      { products, totalPrice },
      { new: true } // Returns the updated cart
    ).populate("products.productId");
    if (!updatedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteCart = async (req, res) => {
  const { cartId } = req.params;
  try {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    if (!deletedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createCart,
  getAllCarts,
  getCartByUserId,
  updateCart,
  deleteCart,
};
