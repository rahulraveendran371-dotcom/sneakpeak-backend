const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");
const adminMiddleware = require("../middleware/adminMiddleware");
router.get("/stats", adminMiddleware, async (req, res) => {
  try {

    const totalUsers = await User.countDocuments();

    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const orders = await Order.find();

    const totalRevenue = orders.reduce((sum, order) => {
      return sum + order.total;
    }, 0);

    res.json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;