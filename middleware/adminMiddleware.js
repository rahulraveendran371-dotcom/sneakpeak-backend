const User = require("../models/User");

const adminOnly = async (req, res, next) => {
  try {

    if (!req.user) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Admin access required"
      });
    }

    req.user = user;

    next();

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Authorization failed"
    });

  }
};

module.exports = adminOnly;