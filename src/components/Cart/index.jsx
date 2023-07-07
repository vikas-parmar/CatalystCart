import React from "react";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
`;

const data = [
  {
    id: 1,
    img: "https://www.prada.com/content/dam/pradabkg_products/S/SD1/SD148/10HYF0AI2/SD148_10HY_F0AI2_S_221_SLF.jpg",
    title: "photo1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus odit voluptatibus ullam a adipisci sapiente nesciunt blanditiis facere cum odio.",
    isNew: true,
    oldPrice: 22,
    newPrice: 1600,
  },
  {
    id: 2,
    img: "https://www.prada.com/content/dam/pradabkg_products/S/SD1/SD148/10HYF0AI2/SD148_10HY_F0AI2_S_221_SLF.jpg",
    title: "photo2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus odit voluptatibus ullam a adipisci sapiente nesciunt blanditiis facere cum odio.",
    isNew: true,
    oldPrice: 19,
    newPrice: 1400,
  },
];

const Cart = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        position: "absolute",
        top: "62px",
        right: "8px",
        p: 3,
        zIndex: 999,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        color="primary"
        gutterBottom
      >
        Products in your Cart
      </Typography>

      {data.map((item) => (
        <Box key={item.id} display="flex" alignItems="center" gap={2} mb={3}>
          <Image src={item.img} alt="" />
          <Box>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="caption">
              {item.desc?.substring(0, 100)}
            </Typography>
            <Typography variant="body2" color="primary.dark">
              1 x ₹ {item.newPrice}
            </Typography>
          </Box>
          <IconButton aria-label="delete">
            <Delete color="error" />
          </IconButton>
        </Box>
      ))}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2" fontWeight="700">
          SUBTOTAL
        </Typography>
        <Typography variant="body2" fontWeight="700">
          ₹ 3000/-
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
        <Link to="/checkout/1">
          <Button variant="contained" color="primary" size="small">
            proceed to Checkout
          </Button>
        </Link>
        <Button variant="text">Reset Cart</Button>
      </Box>
    </Paper>
  );
};

export default Cart;
