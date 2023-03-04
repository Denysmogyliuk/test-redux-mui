import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { RelativeRoutingType, To } from "react-router-dom";
import { selectIsAuth } from "../app/features/auth";

declare function Navigate(props: NavigateProps): null;

interface NavigateProps {
  to: To;
  replace?: boolean;
  state?: any;
  relative?: RelativeRoutingType;
}

type Props = {
  children: ReactNode,
}

const Authenticated: FC<Props> = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <>{children}</> : Navigate({ to: "/" });
}

export default Authenticated;
