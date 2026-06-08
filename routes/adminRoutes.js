const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/stats", adminMiddleware, async (req, res) => {
  try {
    const [
      totalUsers,
      totalProducts,
      totalOrders,
      revenueResult,
    ] = await Promise.all([
      User.countDocuments(),
      Product.countDocuments(),
      Order.countDocuments(),

      Order.aggregate([
        {
          $match: {
            status: {
              $ne: "Cancelled",
            },
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: {
              $sum: "$total",
            },
          },
        },
      ]),
    ]);

    const totalRevenue =
      revenueResult[0]?.totalRevenue || 0;

    res.status(200).json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue,
    });
  } catch (error) {
    console.error(
      "Admin Stats Error:",
      error
    );

    res.status(500).json({
      message:
        "Failed to fetch dashboard stats",
    });
  }
});

module.exports = router;