// @desc    get Goals
// @route   api/goals
// @access  private
const getGoals = (req, res) => {
  res.status(200).json({ Outcome: "get Success" });
};

// @desc    post Goals
// @route   api/goals
// @access  private
const setGoals = (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400).json({ message: "Please add a text field" });
    console.log("Data not reciveded");
  } else {
    res.status(200).json({ Outcome: "set Success" });
  }
};

// @desc    update Goal
// @route   api/goals/:id
// @access  private
const putGoals = (req, res) => {
  res.status(200).json({ Outcome: "update Success" });
};

// @desc    delete Goal
// @route   api/goals/:id
// @access  private
const deleteGoals = (req, res) => {
  res.status(200).json({ Outcome: "delete Success" });
};

module.exports = { getGoals, setGoals, putGoals, deleteGoals };
