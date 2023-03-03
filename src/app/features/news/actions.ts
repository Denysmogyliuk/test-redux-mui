import { createAsyncThunk } from "@reduxjs/toolkit";
import { News } from "./types";

type FetchNews = {
  start: number,
  limit: number,
}

export const fetchNews = createAsyncThunk<News[], FetchNews, {rejectValue: string}>(
  "news/fetchNews",
  async ({ start, limit }, { rejectWithValue }) => {
    console.log(start, limit)
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_startx=${start}&_limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data:Promise<News[]> = await response.json();

      return data;
    } catch (error: any) {
      console.log(error.message)
      return rejectWithValue(error.message as string);
    }
  }
);

// export const deleteTopic = createAsyncThunk(
//   "news/deleteTopic",

//   async function (id, { rejectWithValue, dispatch }) {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/photos/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Server Error, can't delete topic");
//       }

//       // dispatch(removeTopic({ id }));
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
