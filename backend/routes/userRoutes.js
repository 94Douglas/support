const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  userUpdateProfile,
  fetchUsersCtrl,
} = require("../controllers/userController");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/getAllUsers", fetchUsersCtrl);

const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getMe);

router.post("/profile", protect, userUpdateProfile);

module.exports = router;
