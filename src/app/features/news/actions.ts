import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetTopics, News } from "./types";

export const getTopics = createAsyncThunk<News[], GetTopics, { rejectValue: string }>(
  "news/getTopics",
  async ({ start, limit }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data: Promise<News[]> = await response.json();

      return data;
    } catch (error: any) {
      console.log(error.message)
      return rejectWithValue(error.message as string);
    }
  }
);

export const deleteTopic = createAsyncThunk<string, number>(
  "news/deleteTopic",
  async function (id: number, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Server Error, can't delete topic");
      }

      return String(id)
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTopicsById = createAsyncThunk(
  "news/getTopicsById",
  async function (id: number, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );

      const data: Promise<News> = await response.json();
      return data
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
