import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const all = (state: RootState) => state.news;
export const selectIds = (state: RootState) => state.news.ids;
export const selectById = (state: RootState) => state.news.byId;
export const selectIsNewsLoading = (state: RootState) => state.news.isLoading;
export const selectMaxId = (state: RootState) => state.news.maxId;
export const selectErrorMessage = (state: RootState) => state.news.error;

export const selectNews = createSelector(selectById, selectIds, (hash, list) =>
  list.map((id) => hash[id])
);
