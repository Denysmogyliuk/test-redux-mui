const LOGIN = "Admin";
const PASSWORD = "12345";

const checkCredentials = (data) => {
  if (data.username === LOGIN && data.password === PASSWORD) {
    return true;
  } else {
    return false;
  }
};

export const authenticate = (data, errorCallback) => {
  // const promise = new Promise((resolve, reject) => {
  //   if (!checkCredentials(data)) {
  //     reject({
  //       status: 500,
  //       errorText: "Incorrect data",
  //     });
  //   } else {
  //     window.localStorage.setItem("user.authenticated", "true");
  //     resolve({
  //       status: 200,
  //       data: "ok",
  //     });
  //   }
  // });
  // return promise;

  if (checkCredentials(data)) {
    window.localStorage.setItem("user.authenticated", "true");
    console.log("User authenticated!");
    errorCallback(false);
  } else {
    errorCallback(true);
  }
};

export const checkAuthStatus = () => {
  if (localStorage.getItem("user.authenticated")) {
    return true;
  } else {
    return false;
  }
};

export const logout = () => {
  window.localStorage.removeItem("user.authenticated");
};
