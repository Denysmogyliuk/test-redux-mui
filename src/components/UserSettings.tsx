import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectIsAuth } from "../app/features/auth";
import { logout } from "../app/features/auth/slice";
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem } from "@mui/material/";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

const UserSettings: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const isAuthenticated = useAppSelector(selectIsAuth);
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenLogin = () => {
    handleCloseUserMenu();
    handleOpen();
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
    window.location.pathname === "/profile" && navigate("/");
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    isAuth && setOpen(false);
  }, [isAuth]);

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
        {isAuthenticated ? (
          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center">{t("logout")}</Typography>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleOpenLogin}>
            <Typography textAlign="center">{t("login")}</Typography>
          </MenuItem>
        )}
      </Menu>

      <Modal open={open} onClose={handleClose}>
        <LoginForm />
      </Modal>
    </Box>
  );
}

export default UserSettings;
