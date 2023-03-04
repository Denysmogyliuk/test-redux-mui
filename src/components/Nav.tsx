import React, { FC, useState, CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Stack } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { UserSettings } from "./";

const getButtonStyle: CSSProperties | ((props: {
  isActive: boolean;
  isPending: boolean;
}) => CSSProperties | undefined) | undefined = (props) => {
  return props.isActive
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

const getBurgerButtonStyle: CSSProperties | ((props: {
  isActive: boolean;
  isPending: boolean;
}) => CSSProperties | undefined) | undefined = (prop: any) => {
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

const HEADER_PAGES = [
  {
    id: 0,
    name: "main",
    path: "/",
  },
  {
    id: 1,
    name: "news",
    path: "/news",
  },
  {
    id: 2,
    name: "profile",
    path: "/profile",
  },
];


const Nav: FC = () => {
  const { t, i18n } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const changeLanguage = (lng: string) => {
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
              {HEADER_PAGES.map((item) => {
                const { id, name, path } = item;
                return (
                  <MenuItem
                    key={id}
                    onClick={handleCloseNavMenu}
                    sx={{ cursor: "auto" }}
                  >
                    <Typography textAlign="center">
                      <NavLink style={getBurgerButtonStyle} to={path}>
                        {t(`${name}`)}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {HEADER_PAGES.map((item) => {
              const { id, name, path } = item;

              return (
                <Button
                  key={id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    cursor: "auto",
                  }}
                >
                  <NavLink style={getButtonStyle} to={path}>
                    {t(name)}
                  </NavLink>
                </Button>
              );
            })}
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
          <UserSettings />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
