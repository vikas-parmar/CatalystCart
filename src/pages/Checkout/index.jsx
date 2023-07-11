import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

const Image = styled.img`
  width: 200px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 52vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "400"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const data = [
  {
    id: 1,
    img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
    Name: "JESSIE THUNDER SHOES",
    ProductId: "93813718293",
    Size: "37.5",
    Price: 3998,
  },
  {
    id: 1,
    img: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
    Name: "HAKURA T-SHIRT",
    ProductId: "93813718293",
    Size: "M",
    Price: 399,
  },
];

const Checkout = () => {
  return (
    // container
    <Box>
      <Box p={{ xs: 1, sm: 2 }}>
        {" "}
        {/* Wrapper */}
        <Typography
          variant="h1"
          textAlign="center"
          fontSize="3rem"
          fontWeight="bolder"
        >
          {/* title */}
          Let's Checkout!!!
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={3}
        >
          {" "}
          {/* top */}
          <Button variant="outlined" sx={{ p: 1, fontWeight: 600 }}>
            CONTINUE SHOPPING
          </Button>
          <Box display={{ xs: "none", sm: "flex" }} gap={2}>
            <Typography variant="subtitle1" textTransform="underline">
              Shopping Bag(2)
            </Typography>
            <Typography variant="subtitle1" textTransform="underline">
              Wishlist(0)
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ p: 1, fontWeight: 600, bgcolor: "black" }}
          >
            CHECKOUT NOW
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          {" "}
          {/* bottom */}
          <Box flex={3}>
            {" "}
            {/* Info */}
            {data.map((item) => (
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ xs: "column", sm: "row" }}
              >
                {" "}
                {/* Product */}
                <Box display="flex" flex={2}>
                  {" "}
                  {/*product details */}
                  <Image src={item.img} />
                  <Box
                    p={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                  >
                    <Typography component="span">
                      <b>Product:</b> {item.Name}
                    </Typography>
                    <Typography component="span">
                      <b>ID:</b> {item.ProductId}
                    </Typography>
                    <Typography component="span">
                      <b>Size:</b> {item.Size}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  flex={1}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  {" "}
                  {/* price details */}
                  <Box display="flex" alignItems="center" mb={2}>
                    {" "}
                    {/*ProductAmountContainer*/}
                    <Add />
                    <Typography variant="h4" m={3}>
                      2
                    </Typography>
                    <Remove />
                  </Box>
                  <Typography variant="h4">₹ {item.Price}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ 4397</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Charges</SummaryItemText>
              <SummaryItemPrice> ₹ 50/-</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ 50/-</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ 4397</SummaryItemPrice>
            </SummaryItem>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                padding: 1,
                bgcolor: "black",
                color: "white",
                fontWeight: 600,
              }}
            >
              CHECKOUT NOW
            </Button>
          </Summary>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
