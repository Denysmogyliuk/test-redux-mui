import { FC } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Copyright from "./Copyright";

const Layout: FC = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Outlet />
      </main>

      <footer style={{ display: "flex", justifyContent: "flex-end" }}>
        <Copyright />
      </footer>
    </>
  );
}

export default Layout;
