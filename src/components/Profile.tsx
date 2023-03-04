import { FC } from "react";
import { useAppSelector } from "../app/hooks";
import { Navigate } from "react-router";
import { selectIsAuth } from "../app/features/auth";

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
