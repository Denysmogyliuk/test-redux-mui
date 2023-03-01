import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { authenticate, checkAuthStatus, logout } from "../api/auth";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginData = {
    username: login.toString(),
    password: password.toString(),
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginHandler = (evt) => {
    evt.preventDefault();
    authenticate(loginData, setError);
  };

  return (
    <Box
      component="form"
      onSubmit={loginHandler}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      <h2 style={{ alignSelf: "center" }}>{t("login")}</h2>
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          {t("name")}
        </InputLabel>
        <OutlinedInput
          error={error}
          id="login"
          type="text"
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          label={t("name")}
          onInput={(evt) => setLogin(evt.target.value)}
        />
      </FormControl>

      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          {t("password")}
        </InputLabel>
        <OutlinedInput
          error={error}
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onInput={(evt) => setPassword(evt.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="password"
        />
      </FormControl>
      <Button type="submit" variant="contained" sx={{ margin: "8px" }}>
        {t("login")}
      </Button>
      {error ? (
        <Alert severity="error" sx={{ margin: "8px" }}>
          <AlertTitle>{t("authorizeError")}</AlertTitle>
        </Alert>
      ) : null}
      <Popper open={true}></Popper>
    </Box>
  );
}
