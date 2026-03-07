const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const adminMiddleware = require("../middleware/adminMiddleware");


// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {

    const { search, category, page = 1, limit = 10, isActive } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    let filter = {};

    // search by name
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    // category filter
    if (category) {
      filter.category = category;
    }

    // active filter
    if (isActive !== undefined) {
      filter.isActive = isActive === "true";
    }

    const skip = (pageNumber - 1) * limitNumber;

    const products = await Product.find(filter)
      .skip(skip)
      .limit(limitNumber);

    const totalProducts = await Product.countDocuments(filter);

    res.json({
      products,
      totalProducts,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalProducts / limitNumber)
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// CREATE PRODUCT (ADMIN)
router.post("/", adminMiddleware, async (req, res) => {
  try {

    const product = new Product(req.body);

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// UPDATE PRODUCT
router.put("/:id", adminMiddleware, async (req, res) => {
  try {

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedProduct);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// DELETE PRODUCT
router.delete("/:id", adminMiddleware, async (req, res) => {
  try {

    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;