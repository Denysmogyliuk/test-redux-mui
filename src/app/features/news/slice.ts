import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toHash, toList } from "../../utils";
import { getTopics, deleteTopic, getTopicsById } from "./actions";
import { InitialState } from "./types";

const initialState: InitialState = {
  byId: {},
  ids: [],
  isLoading: false,
  error: "",
  maxId: 0,
};

export const news = createSlice({
  name: "news",
  initialState,
  reducers: {
    hideTopic: (state, action: PayloadAction<number>) => {
      state.ids = [...state.ids.filter(item => Number(item) !== action.payload),]
      state.byId = { ...state.byId }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTopics.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getTopics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.byId = { ...state.byId, ...toHash(action.payload) };
      state.ids = toList(state.byId);
      state.maxId = Math.max(...state.ids.map(Number));
    });
    builder.addCase(getTopics.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteTopic.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTopic.fulfilled, (state, { payload }) => {
      const { [payload]: ommited, ...rest } = state.byId;
      state.isLoading = false;
      state.byId = rest;
      state.ids = toList(state.byId);
    });
    builder.addCase(getTopicsById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTopicsById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.byId[payload.id] = payload;
      state.ids = toList(state.byId);
      state.maxId = Math.max(...state.ids.map(Number));
    });
  },
});

export const { hideTopic } = news.actions;
export default news.reducer;
