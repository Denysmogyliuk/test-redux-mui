// import { checkAuthStatus, logout } from "../api/auth";
import { useAppSelector } from "../app/hooks";
import { Navigate } from "react-router";
import { selectIsAuth } from "../app/features/auth";
import { FC } from "react";

const Profile: FC = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return !isAuth ? (
    <Navigate to="/" />
  ) : (
    <img
      src="./images/cat.jpeg"
      alt="cat"
      height="800"
      style={{ height: "auto" }}
    />
  );
}

export default Profile;
