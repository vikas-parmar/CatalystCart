import styled from "@emotion/styled";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 143px;
`;

const Footer = () => {
  return (
    <Box
      component="footer"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box flex="1" display="flex" flexDirection="column" p={3}>
        <Typography variant="h1" fontSize="2rem" fontWeight="600">
          CatalystCart
        </Typography>
        <Typography variant="p" m="20px 0px">
          CatalystCart is your ultimate destination for online fashion shopping.
          Explore our curated collection of trendy clothing, accessories, and
          more. With a seamless shopping experience and exceptional customer
          service, CatalystCart is your gateway to digital retail. Discover your
          unique style today!
        </Typography>
        <Stack direction="row" gap={2}>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </Stack>
      </Box>
      <Box flex="1" p={3}>
        <Typography variant="h3" fontSize="1.17rem" fontWeight="bold" mb={4}>
          Useful Links
        </Typography>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Box>
      <Box flex="1" p={3}>
        <Typography variant="h3" fontSize="1.17rem" fontWeight="bold" mb={4}>
          Contact
        </Typography>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Darbar Chowk Sanchore,
          Rajasthan. 343041
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 9783415211
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> admin@catalystcart.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Box>
    </Box>
  );
};

export default Footer;
