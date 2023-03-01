import { authenticate, checkAuthStatus, logout } from "../api/auth";
import { Redirect } from "react-router-dom";

export default function Authenticated({ children }) {
  return checkAuthStatus() ? (
    <>{children}</>
  ) : (
    <Redirect to="/login" noThrow={true} />
  );
}
