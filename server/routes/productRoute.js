const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const authAdmin = require("../utils/authorization");
const auth = require("../utils/authentication");
router.post("/product", authAdmin, createProduct);
router.get("/product", getAllProducts);
router.get("/product:id", getProductById);
router.put("/product:id", authAdmin, updateProduct);
router.delete("/product:id", authAdmin, deleteProduct);
module.exports = router;
