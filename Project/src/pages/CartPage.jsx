import React from "react";
import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";

const CartPage = () => {
  return (
    <Box sx={{ padding: 4, fontFamily: "Poppins" }}>
      <Typography variant="h4" sx={{ color: "#003399", mb: 3 }}>Your Cart</Typography>
      <List>
        {[1, 2].map((item) => (
          <ListItem key={item} divider>
            <ListItemText primary={`Product ${item}`} secondary="₹999" />
            <Button variant="outlined" color="error">Remove</Button>
          </ListItem>
        ))}
      </List>
      <Button fullWidth variant="contained" sx={{ backgroundColor: "#003399", mt: 3 }}>Proceed to Payment</Button>
    </Box>
  );
};

export default CartPage;
