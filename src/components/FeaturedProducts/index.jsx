import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { Card } from "components";
import { products } from "data";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  /* For WebKit browsers */
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  gap: 50px;
`;

const FeaturedProducts = ({ type }) => {
  return (
    <Box width="100%" p={2}>
      <Top>
        <Typography
          variant="h3"
          flex={2}
          textTransform="capitalize"
        >
          {type} products
        </Typography>
        <Typography variant="subtitle1" flex={3} color="gray">
          Indulge in the latest fashion trends and discover a world of
          possibilities with our {type} products. From luxurious fabrics to
          impeccable craftsmanship, each item is designed to make a statement.
          Whether you're seeking a timeless classic or a bold and edgy piece,
          our collection has something for everyone.
        </Typography>
      </Top>
      <Bottom>
        {products?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Bottom>
    </Box>
  );
};

export default FeaturedProducts;
