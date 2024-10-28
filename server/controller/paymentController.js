const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../db/orderSchema");
const Cart = require("../db/cartSchema");

const createPaymentIntent = async (req, res) => {
  const { cartId, paymentMethodId } = req.body;

  try {
    // Get the cart details
    const cart = await Cart.findById(cartId).populate("products.productId");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Calculate total price from cart
    const totalPrice = cart.products.reduce((acc, product) => {
      return acc + product.productId.price * product.quantity;
    }, 0);

    // Create a payment intent using Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100, // Stripe expects the amount in cents
      currency: "usd", // Adjust the currency based on your needs
      payment_method: paymentMethodId,
      confirmation_method: "manual",
      confirm: true, // Automatically attempt to confirm the payment intent
    });

    // If the payment is successful, create an order
    if (paymentIntent.status === "succeeded") {
      const order = new Order({
        userId: cart.userId,
        products: cart.products,
        totalPrice,
        paymentStatus: "completed",
        orderStatus: "processing",
        shippingAddress: req.body.shippingAddress,
      });

      await order.save();

      // Clear the cart after successful payment
      await Cart.findByIdAndDelete(cartId);

      res.status(201).json({ message: "Payment successful", order });
    } else {
      res.status(400).json({
        message: "Payment requires further action",
        clientSecret: paymentIntent.client_secret,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPaymentIntent };
