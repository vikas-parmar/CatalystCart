import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  &:hover .secondImg {
    z-index: 2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const Badge = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: white;
  color: teal;
  padding: 3px 5px;
  z-index: 3;
  font-weight: 500;
  font-size: 12px;
`;

const Card = ({ item }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "CaptionText" }}
      to={`/products/${item.id}`}
    >
      <Box width="280px" display="flex" flexDirection="column" mb={6}>
        <ImageContainer>
          {item?.isNew && <Badge>New Season</Badge>}
          <Image
            src={item.img}
            alt=""
            className="mainImg"
            style={{ zIndex: 1 }}
          />
          <Image src={item.img2} alt="" className="secondImg" />
        </ImageContainer>
        <Typography variant="body1" fontWeight="500">
          {item?.title}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            variant="subtitle1"
            style={{ color: "gray", textDecoration: "line-through" }}
          >
            ₹{item.oldPrice.toLocaleString()}
          </Typography>
          <Typography variant="subtitle1" color="primary" fontWeight="700">
            ₹{item.newPrice}/-
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
