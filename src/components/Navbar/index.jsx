import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import logo from "../../assets/logo1.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart";

const Image = styled.img`
  width: ${({ size }) => size};
  mix-blend-mode: multiply;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box component="header" height="60px">
      <Box
        component="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={1}
      >
        <Box
          display={{ xs: "none", sm: "flex" }}
          flex="1"
          order={{ xs: 1, md: 0 }}
          alignItems="center"
          justifyContent={{ xs: "flex-end", md: "flex-start" }}
        >
          <Link to="/products/1">
            <Button variant="text" sx={{ fontWeight: "700" }} color="gray">
              Men
            </Button>
          </Link>
          <Link to="/products/2">
            <Button variant="text" sx={{ fontWeight: "700" }} color="gray">
              Women
            </Button>
          </Link>
          <Link to="/products/3">
            <Button variant="text" sx={{ fontWeight: "700" }} color="gray">
              Accesories
            </Button>
          </Link>
        </Box>
        <Link to="/" style={{ textDecoration: "none", color: "#1A2027" }}>
          <Box
            flex="1"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={{ xs: "flex-start", md: "center" }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              fontWeight="bold"
              fontSize="24px"
              display={{ xs: "none", sm: "block" }}
            >
              CatalystCart
            </Typography>
            <Image src={logo} alt="" size="50px" />
          </Box>
        </Link>
        <Box
          flex="1"
          order={{ xs: 1, md: 0 }}
          display="flex"
          alignItems="center"
          gap={{ xs: 0, md: 1 }}
          justifyContent="flex-end"
        >
          <IconButton type="button">
            <Search color="gray" />
          </IconButton>
          <IconButton>
            <PersonOutlineIcon color="gray" />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon color="gray" />
          </IconButton>
          <IconButton onClick={() => setOpen(!open)}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="gray" />
            </Badge>
          </IconButton>
        </Box>
      </Box>
      {open && <Cart />}
    </Box>
  );
};

export default Navbar;
