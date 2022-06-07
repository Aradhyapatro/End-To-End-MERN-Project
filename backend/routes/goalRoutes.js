const express = require("express");
const router = express.Router();
const {
  deleteGoals,
  getGoals,
  putGoals,
  setGoals,
} = require("../controllers/goalControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoals);

router.route("/:id").put(protect, putGoals).delete(protect, deleteGoals);

module.exports = router;
