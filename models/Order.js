const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
  userId: {
    type: String,
    required: true
  },

  items: [
    {
      id: String,
      name: String,
      price: Number,
      image: String,
      category: String,
      qty: Number
    }
  ],

  total: {
    type: Number,
    required: true
  },

  paymentMethod: {
    type: String
  },

  status: {
    type: String,
    default: "Placed"
  },

  date: {
    type: String
  }

},
{ timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);