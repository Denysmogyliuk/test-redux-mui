import { authenticate, checkAuthStatus, logout } from "../api/auth";
import { redirect } from "react-router-dom";

export default function Profile() {
  return checkAuthStatus() ? (
    <img
      src="./images/cat.jpeg"
      alt="cat"
      height="800"
      style={{ height: "auto" }}
    />
  ) : (
    <h1>AUTHORIZE!</h1>
  );
}
