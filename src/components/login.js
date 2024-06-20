"use client";
import React, { useState } from "react";
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

  const [emailTouched, setEmailTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handlePasswordToggle = () => {
    setToggle(!toggle);
  };

  const emailChange = (e) => {
    setEmailTouched(true);
    let temp = e.target.value;
    temp = temp.toLowerCase();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    console.log(regex.test(temp), temp);
    if (temp.length == 0 && emailTouched == true) setError("Email is required");
    else {
      if (!regex.test(temp)) {
        setError("Email must be valid");
      } else setError("");
    }
    console.log(regex.test(temp), error);
  };

  const passwordChange = (e) => {
    let pass = e.target.value;
    setPasswordTouched(true);
    if (pass.length == 0 && passwordTouched == true)
      setErrorPassword("Password is required");
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
              id="email"
              helperText={error}
            />
            <InputLabel sx={{ fontSize: 13, color: "black" }}>
              Password
            </InputLabel>
            <TextField
              type={toggle ? "password" : "text"}
              onChange={passwordChange}
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
