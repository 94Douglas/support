const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")) ||
    req.user.isAdmin
  ) {
    try {
      // GET token from header
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // GET user from token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token || !req.user.isAdmin) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

module.exports = { protect };
