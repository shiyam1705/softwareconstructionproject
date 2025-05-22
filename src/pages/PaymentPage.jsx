import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const PaymentPage = () => {
  return (
    <Box sx={{ padding: 4, fontFamily: "Poppins", maxWidth: 500, margin: "auto" }}>
      <Typography variant="h4" sx={{ color: "#003399", mb: 3 }}>Payment Details</Typography>

      <TextField fullWidth label="Card Number" variant="outlined" margin="normal" />
      <TextField fullWidth label="Expiry Date" variant="outlined" margin="normal" />
      <TextField fullWidth label="CVV" variant="outlined" margin="normal" type="password" />

      <Button fullWidth variant="contained" sx={{ backgroundColor: "#003399", mt: 3 }}>
        Pay ₹1998
      </Button>
    </Box>
  );
};

export default PaymentPage;
