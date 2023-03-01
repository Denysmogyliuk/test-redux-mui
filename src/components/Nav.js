import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import UserSettings from "./UserSettings";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";

const getButtonStyle = (prop) => {
  return prop.isActive
    ? {
        textDecoration: "none",
        cursor: "auto",
        color: "white",
        borderBottom: "2px solid white",
      }
    : {
        textDecoration: "none",
        color: "white",
      };
};

const getBurgerButtonStyle = (prop) => {
  return prop.isActive
    ? {
        textDecoration: "none",
        cursor: "auto",
        color: "black",
        borderBottom: "1px solid black",
      }
    : {
        textDecoration: "none",
        color: "black",
      };
};

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{ cursor: "auto" }}>
                <Typography textAlign="center">
                  <NavLink style={getBurgerButtonStyle} to={"/"}>
                    {t("main")}
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ cursor: "auto" }}>
                <Typography textAlign="center">
                  <NavLink style={getBurgerButtonStyle} to={"/news"}>
                    {t("news")}
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ cursor: "auto" }}>
                <Typography textAlign="center">
                  <NavLink style={getBurgerButtonStyle} to={"./profile"}>
                    {t("profile")}
                  </NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", cursor: "auto" }}
            >
              <NavLink style={getButtonStyle} to={"/"}>
                {t("main")}
              </NavLink>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", cursor: "auto" }}
            >
              <NavLink style={getButtonStyle} to={"/news"}>
                {t("news")}
              </NavLink>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", cursor: "auto" }}
            >
              <NavLink style={getButtonStyle} to={"/profile"}>
                {t("profile")}
              </NavLink>
            </Button>
          </Box>
          <Stack direction="row" spacing={1} style={{ marginRight: "10px" }}>
            <Button
              size="small"
              variant="contained"
              onClick={() => changeLanguage("ukr")}
            >
              Укр
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => changeLanguage("en")}
            >
              Eng
            </Button>
          </Stack>
          <UserSettings></UserSettings>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
