import { createAsyncThunk } from "@reduxjs/toolkit";

const LOGIN = "admin";
const PASSWORD = "12345";

type Credentials = {
  username: string,
  password: string,
}

const checkCredentials = (data: Credentials) => {
  if (data.username === LOGIN && data.password === PASSWORD) {
    return true;
  }

  return false;
};

const wait = (delay = 500) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

export const authenticate =
 createAsyncThunk<boolean, Credentials>("auth/authenticate",
  async (data) => {
    await wait(500);


      if (checkCredentials(data)) {
        window.localStorage.setItem("user.authenticated", "true");
        return true;
      }

      window.localStorage.setItem("user.authenticated", "false");
      return false;
  });