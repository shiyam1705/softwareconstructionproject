import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  CardMedia,
} from "@mui/material";

const CustomerDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <Box sx={{ padding: 4, fontFamily: "Poppins" }}>
      <Typography
        variant="h4"
        sx={{ color: "#003399", marginBottom: 3, fontWeight: 600 }}
      >
        Welcome to HushBuy
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <Card sx={{ height: "100%" }}>
              {product.imageUrl && (
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imageUrl}
                  alt={product.title}
                />
              )}
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  {product.description}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  ₹{product.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#003399",
                    color: "white",
                    mt: 2,
                    borderRadius: 2,
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerDashboard;
