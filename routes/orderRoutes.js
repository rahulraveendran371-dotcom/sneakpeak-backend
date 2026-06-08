const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

/* CREATE ORDER */

router.post("/", async (req, res) => {
  try {
    const {
      userId,
      items,
      paymentMethod,
      shippingAddress,
    } = req.body;

    if (!userId) {
      return res
        .status(400)
        .json({
          message: "User ID required",
        });
    }

    if (
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return res
        .status(400)
        .json({
          message:
            "Order items required",
        });
    }

    const calculatedTotal =
      items.reduce(
        (sum, item) =>
          sum +
          item.price * item.qty,
        0
      );

    const order = new Order({
      userId,
      items,
      shippingAddress,
      paymentMethod,
      total: calculatedTotal,
      status: "Placed",
      date: new Date(),
    });

    const savedOrder =
      await order.save();

    res
      .status(201)
      .json(savedOrder);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to create order",
    });
  }
});

/* GET ORDERS */

router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;

    const filter = userId
      ? { userId }
      : {};

    const orders =
      await Order.find(filter).sort({
        createdAt: -1,
      });

    res.json(orders);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch orders",
    });
  }
});

/* UPDATE STATUS */

router.patch("/:id", async (req, res) => {
  try {
    const {
      status,
    } = req.body;

    const allowedStatuses = [
      "Placed",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];

    if (
      !allowedStatuses.includes(
        status
      )
    ) {
      return res.status(400).json({
        message:
          "Invalid status",
      });
    }

    const updatedOrder =
      await Order.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );

    if (!updatedOrder) {
      return res.status(404).json({
        message:
          "Order not found",
      });
    }

    res.json(updatedOrder);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to update order",
    });
  }
});

module.exports = router;