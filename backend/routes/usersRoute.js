const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  getMe,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

router.post("/", userRegister);
router.post("/login", userLogin);
router.get("/getMe", protect, getMe);

module.exports = router;
