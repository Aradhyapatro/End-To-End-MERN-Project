const asyncHandler = require("express-async-handler");
const { Goals } = require("../model/goalModel");

// @desc    get Goals
// @route   api/goals
// @access  private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find();
  res.status(200).json(goals);
});

// @desc    post Goals
// @route   api/goals
// @access  private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  } else {
    const goal = await Goals.create({ text: req.body.text });
    res.status(200).json(goal);
  }
});

// @desc    update Goal
// @route   api/goals/:id
// @access  private
const putGoals = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);
  if (!goal || !req.body.text) {
    res.status(404);
    throw new Error("Goal not found or New Goal not Found");
  }

  const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    insert: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc    delete Goal
// @route   api/goals/:id
// @access  private
const deleteGoals = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(404);
    throw new Error("please enter the id of the Goal");
  } else {
    const goal = await Goals.findById(req.params.id);

    await goal.remove();
    res.status(200).json({ id: req.params.id });
  }
});

module.exports = { getGoals, setGoals, putGoals, deleteGoals };
