import axios from "axios";
const API_URL = "http://localhost:5000/api/goals/";

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);

  if (response.data) {
    console.log("NOt working arya");
  }

  return response.data;
};

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  console.log("Get done");
  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
};

export default goalService;
