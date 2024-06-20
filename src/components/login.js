"use client";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Card,
  CardActions,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handlePasswordToggle = () => {
    setToggle(!toggle);
  };

  const handleFocusEmail = () => {
    setEmailFocus(true);
  };
  useEffect(() => {
    if (emailFocus) setError("Email is required");
  }, [emailFocus]);

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  useEffect(() => {
    if (passwordFocus) setErrorPassword("Password  is required");
  }, [passwordFocus]);

  const emailChange = (e) => {
    setEmailTouched(false);
    let temp = e.target.value;
    setEmail(temp);
    if (temp > 0) setEmailFocus(false);
    temp = temp.toLowerCase();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    console.log(regex.test(temp), temp);

    if (temp.length == 0) setError("Email is required");
    else {
      if (!regex.test(temp)) {
        setError("Email must be valid");
      } else setError("");
    }
    console.log(regex.test(temp), error);
  };

  const passwordChange = (e) => {
    let pass = e.target.value;
    setPassword(pass);
    if (pass > 0) setPasswordFocus(false);
    setPasswordTouched(true);
    if (pass.length == 0) setErrorPassword("Password is required");
    else setErrorPassword("");
  };

  return (
    <Paper sx={{ margin: "auto", maxWidth: 370, padding: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs spacing={5}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginBottom={2}
          >
            <Typography variant={"h5"} sx={{ fontWeight: 500 }}>
              Login to Liveloads
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: 13 }}>
              <Link href="/signUp" underline="none">
                Dont have a account?
              </Link>
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <InputLabel sx={{ fontSize: 13, color: "black" }}>
              Email Address
            </InputLabel>
            <TextField
              onChange={emailChange}
              sx={{
                marginBottom: 2,
                "& .MuiFormHelperText-root": { color: "red" },
              }}
              value={email}
              id="email"
              helperText={error}
              onFocus={handleFocusEmail}
            />
            <InputLabel sx={{ fontSize: 13, color: "black" }}>
              Password
            </InputLabel>
            <TextField
              type={toggle ? "password" : "text"}
              onChange={passwordChange}
              value={password}
              onFocus={handlePasswordFocus}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handlePasswordToggle}
                      edge="end"
                    >
                      {toggle ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                marginBottom: 2,
                "& .MuiFormHelperText-root": { color: "red" },
              }}
              helperText={errorPassword}
            />
            <Stack alignItems={"flex-end"} marginTop={2} marginBottom={4}>
              <Typography sx={{ fontWeight: 500, fontSize: 13 }}>
                <Link
                  href="/forgetPassword"
                  underline="none"
                  color={"black"}
                  sx={{ "&:hover": { color: "#1890ff" } }}
                >
                  Forget Password?
                </Link>
              </Typography>
            </Stack>
            <Button
              sx={{
                backgroundColor: "#1890ff",
                color: "whitesmoke",
                height: 40,
              }}
            >
              Login
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default login;
