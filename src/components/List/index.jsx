import React from "react";
import { Card } from "components";
import { products } from "data";
import { Box } from "@mui/material";

const List = () => {
  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
      {products?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default List;
