import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  selectInAuthorizing,
  selectIsAuth,
  selectIsError,
} from "../app/features/auth";
import {Box, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Popper, Alert, AlertTitle } from "@mui/material/";
import {Visibility, VisibilityOff} from "@mui/icons-material/";
import { LoadingButton } from "@mui/lab";
import { authenticate } from "../app/features/auth/actions";


const LoginForm: FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const isAuth = useAppSelector(selectIsAuth);
  const isError = useAppSelector(selectIsError);
  const inAuthorizing = useAppSelector(selectInAuthorizing);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const loginHandler = (evt: any) => {
    evt.preventDefault();
    const loginData = {
      username: evt.target[0].value,
      password: evt.target[2].value
    }
    dispatch(authenticate(loginData));
  };

  useEffect(() => {
    isAuth && navigate("/profile");
  }, [isAuth, navigate]);

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
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          error={isError}
          id="login"
          label={t("name")}
          type="text"
        />
      </FormControl>

      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          {t("password")}
        </InputLabel>

        <OutlinedInput
          error={isError}
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="password"
        />
      </FormControl>

      <LoadingButton
        loading={inAuthorizing}
        type="submit"
        variant="contained"
        sx={{ margin: "8px" }}
      >
        {t("login")}
      </LoadingButton>

      {isError && (
        <Alert severity="error" sx={{ margin: "8px" }}>
          <AlertTitle>{t("authorizeError")}</AlertTitle>
        </Alert>
      )}

      <Popper open={true} />
    </Box>
  );
}

export default LoginForm;