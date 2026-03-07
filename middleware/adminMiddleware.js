const jwt = require("jsonwebtoken");
const User = require("../models/user");

const adminMiddleware = async (req, res, next) => {

  try {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    // check admin role
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Admin access required"
      });
    }

    req.user = user;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid token"
    });

  }

};

module.exports = adminMiddleware;