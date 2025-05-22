import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const OrderHistory = () => {
  return (
    <Box sx={{ padding: 4, fontFamily: "Poppins" }}>
      <Typography variant="h4" sx={{ color: "#003399", mb: 3 }}>Order History</Typography>
      <List>
        {[1, 2, 3].map((order) => (
          <ListItem key={order} divider>
            <ListItemText
              primary={`Order #${order}`}
              secondary={`Product ${order} - ₹999 - Delivered`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OrderHistory;
