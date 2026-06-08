const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


// CREATE ORDER
router.post("/", async (req, res) => {
  try {

    const order = new Order(req.body);
    const savedOrder = await order.save();

    res.status(201).json(savedOrder);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// GET ORDERS
router.get("/", async (req, res) => {
  try {

    const { userId } = req.query;

    let filter = {};

    if (userId) {
      filter.userId = userId;
    }

    const orders = await Order.find(filter);

    res.json(orders);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// UPDATE ORDER STATUS (ADMIN)
// UPDATE ORDER STATUS (ADMIN)

router.patch("/:id", async (req, res) => {
  try {

    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updatedOrder);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;