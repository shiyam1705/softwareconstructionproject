import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        navigate(data.user.role === "seller" ? "/seller" : "/customer");
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (err) {
      alert("Error logging in");
      console.error(err);
    }
  };

  return (
    <Box className="login-root">
      <Box className="login-card">
        <Typography variant="h3" className="login-title">HushBuy</Typography>
        <Typography variant="body1" className="login-subtext">Log in to continue</Typography>

        <TextField
          label="Email"
          variant="filled"
          fullWidth
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="filled"
          fullWidth
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin} fullWidth variant="contained" className="login-button">
          Login
        </Button>

        <Typography className="signup-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
