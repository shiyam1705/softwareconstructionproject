import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        navigate("/");
      } else {
        alert(data.msg || "Signup failed");
      }
    } catch (err) {
      alert("Error signing up");
      console.error(err);
    }
  };

  return (
    <Box className="login-root">
      <Box className="login-card">
        <Typography variant="h3" className="login-title">HushBuy</Typography>
        <Typography variant="body1" className="login-subtext">Create your account</Typography>

        <TextField
          label="Full Name"
          variant="filled"
          fullWidth
          className="login-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          select
          label="Role"
          variant="filled"
          fullWidth
          className="login-input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="seller">Seller</MenuItem>
        </TextField>

        <Button onClick={handleSignup} fullWidth variant="contained" className="login-button">
          Sign Up
        </Button>

        <Typography className="signup-text">
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
