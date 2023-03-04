import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticate } from "./actions";
import { InitialState } from "./types";

const initialState: InitialState = {
  isAuthenticated:
    JSON.parse(localStorage.getItem("user.authenticated") || "") || false,
  error: false,
  inAuthorizing: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      window.localStorage.setItem("user.authenticated", "false");
      state.isAuthenticated = false;
      state.error = false;
      state.inAuthorizing = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.error = false;
      state.inAuthorizing = true;
    });
    builder.addCase(
      authenticate.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.isAuthenticated = action.payload;
        state.error = !action.payload;
        state.inAuthorizing = false;
      }
    );
    builder.addCase(authenticate.rejected, (state) => {
      state.isAuthenticated = false;
      state.error = true;
      state.inAuthorizing = false;
    });
  },
},
)

export const { logout } = auth.actions;
export default auth.reducer;
