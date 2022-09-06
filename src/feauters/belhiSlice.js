import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const initialState = {
  belhi: [],
  render: false,
};

export const fetchBelhi = createAsyncThunk(
  "fetch/belhi",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/belhi");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const followThunk = createAsyncThunk(
  "fetch/follow",
  async (data, thunkAPI) => {
    try {
      await fetch(`http://localhost:5000/belhi/${data}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      return "asa";
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const addBelhi = createAsyncThunk(
  "fetch/addBelhi",
  async ({ name, text }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:5000/belhi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({ name, text }),
      });
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const belhiSlice = createSlice({
  name: "belhi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBelhi.fulfilled, (state, action) => {
        state.belhi = action.payload;
      })
      .addCase(followThunk.fulfilled, (state, action) => {
        state.render = true;
      })
      .addCase(addBelhi.fulfilled, (state, action) => {
        state.belhi.push(action.payload);
      });
  },
});

export default belhiSlice.reducer;
