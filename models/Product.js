const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: ["men", "women", "kids"],
    required: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  }

},
{ timestamps: true }
);

// Prevent OverwriteModelError
module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema);