import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create a new goal
export const createNewGoal = createAsyncThunk(
  "goals/create",
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log(token);

      return await goalService.createGoal(goalData, token);
    } catch (error) {
      const message = error.reponse || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// fetching all the goals
export const getGoal = createAsyncThunk(
  "goals/getAllGoals",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await goalService.getGoals(token);
    } catch (error) {
      const message = error.reponse || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewGoal.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push = actions.payload;
      })
      .addCase(createNewGoal.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.message = actions.payload;
      })
      .addCase(getGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGoal.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = actions.payload;
      })
      .addCase(getGoal.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.message = actions.payload;
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
