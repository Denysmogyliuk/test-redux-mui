import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIsAuth } from "../app/features/auth";
import { logout } from "../app/features/auth/slice";
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem } from "@mui/material/";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

const UserSettings: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
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
    setAnchorElUser(null);
    setOpenModal(true)
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorElUser(null);
    window.location.pathname === "/profile" && navigate("/");
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    isAuth && setOpenModal(false);
  }, [isAuth]);

  return (<>
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={t("open menu")}>
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
    </Box>
    <Modal open={openModal} onClose={handleModalClose}>
      <LoginForm />
      {/* <h1>HUI HUI HUI HUI</h1> */}
    </Modal>
  </>
  );
}

export default UserSettings;
