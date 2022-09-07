import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  error: null,
  load: false,
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
  render: false
};
export const authThunk = createAsyncThunk(
  "fetch/auth",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();

      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "fetch/login",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token);

      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.load = false;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.load = false;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.load = false;
        state.error = null;
        state.token = action.payload.token;
        state.render = true
      });
  },
});

export default applicationSlice.reducer;
