import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toHash, toList } from "../../utils";
import { fetchNews, deleteTopic, fetchNewsById } from "./actions";
import { News } from "./types";

type InitialState = {
  byId: Record<string, News>,
  ids: string[],
  isLoading: boolean,
  error: string | undefined,
  maxId: number,
}

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
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.byId = { ...state.byId, ...toHash(action.payload) };
      state.ids = toList(state.byId);
      state.maxId = Math.max(...state.ids.map(Number));
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteTopic.fulfilled, (state, { payload }) => {
      const { [payload]: ommited, ...rest } = state.byId;

      state.isLoading = false;
      state.byId = rest;
      state.ids = toList(state.byId);
    });
    builder.addCase(fetchNewsById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.byId[payload.id] = payload;
      state.ids = toList(state.byId);
      state.maxId = Math.max(...state.ids.map(Number));
    });
  },
});

export const { hideTopic } = news.actions;
export default news.reducer;
