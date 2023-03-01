import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LoginForm from "./LoginForm";
import { useTranslation } from "react-i18next";
import { authenticate, checkAuthStatus, logout } from "../api/auth";
import Modalus from "./Modal";

export default function UserSettings() {
  const { t, i18n } = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenLogin = (event) => {
    handleCloseUserMenu();
    handleOpen();
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logout();
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="" src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {checkAuthStatus() ? (
          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center">{t("logout")}</Typography>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleOpenLogin}>
            <Typography textAlign="center">{t("login")}</Typography>
          </MenuItem>
        )}
      </Menu>
      <Modalus open={open} onClose={handleClose}>
        <LoginForm></LoginForm>
      </Modalus>
    </Box>
  );
}
