const express = require("express");
const router = express.Router();
const {
  deleteGoals,
  getGoals,
  putGoals,
  setGoals,
} = require("../controllers/goalControllers");

router.route("/").get(getGoals).post(setGoals);

router.route("/:id").put(putGoals).delete(deleteGoals);

module.exports = router;
