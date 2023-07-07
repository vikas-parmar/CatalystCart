import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import { useState } from "react";

const Image = styled.img`
  cursor: pointer;
  height: 50px;
  object-fit: cover;
  &:hover {
    opacity: 0.7;
  }
`;

const Main = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://voilastudio.in/voilastudio_admin/images/female_ecomm/kurti_set_21_3_23(15).webp",
    "https://voilastudio.in/voilastudio_admin/images/female_ecomm/kurti_set_21_3_23(15).webp",
  ];

  return (
    <Box
      display="flex"
      p={{ xs: 1, md: 2 }}
      flexDirection={{ xs: "column", sm: "row" }}
      gap={1}
    >
      <Box
        flex={1}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
      >
        <Box flex={1}>
          <Image src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <Image src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </Box>
        <Box flex={8} height={{ xs: "40vh", sm: "90vh" }}>
          <Main src={images[selectedImg]} alt="" />
        </Box>
      </Box>

      <Box
        flex={1}
        px={{ xs: 1, sm: 5 }}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Typography variant="h4" fontWeight="bolder">
          Traditional Indian Kurti Set
        </Typography>

        <Typography variant="caption">
          Discover our exquisite Kurti Set, a perfect blend of traditional charm
          and contemporary style. Crafted with attention to detail, this
          ensemble features a beautifully tailored kurti, complemented by
          versatile bottom wear and a stunning dupatta. With its vibrant colors
          and flattering silhouette, our Kurti Set ensures comfort and elegance
          for any occasion. Shop now and redefine your style effortlessly.
        </Typography>

        <Typography variant="h5" color="primary" fontWeight="bold">
          ₹ 800/-
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <IconButton
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            <RemoveCircleIcon />
          </IconButton>
          <Typography
            variant="h5"
            width="2rem"
            py={1}
            px={2}
            display="flex"
            justifyContent="center"
            fontWeight="500"
            border="1px solid blueviolet"
            borderRadius="10px"
          >
            {quantity}
          </Typography>
          <IconButton onClick={() => setQuantity((prev) => prev + 1)}>
            <AddCircleIcon />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartOutlined />}
        >
          Add to Cart
        </Button>

        <Box>
          <Button
            variant="text"
            color="primary"
            startIcon={<FavoriteBorderRoundedIcon />}
          >
            Add to Wishlist
          </Button>
          <Button
            variant="text"
            color="primary"
            startIcon={<BalanceRoundedIcon />}
          >
            Add to Compare
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" color="gray">
          <Typography variant="subtitle1">
            Vendor: India Traditional wear
          </Typography>
          <Typography variant="subtitle1">Product Type: Kurti</Typography>
          <Typography variant="subtitle1">
            Tag: Indian Traditional wear, Women
          </Typography>
        </Box>

        <Box>
          <Accordion elevation={0}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="body1">DESCRIPTION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="body1">ADDITIONAL INFORMATION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="body1">FAQ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
