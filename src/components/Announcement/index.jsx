import { Box } from "@mui/material";

const Announcement = () => {
  return (
    <Box
      height="40px"
      bgcolor="primary.main"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      Super Deal! Free Shipping on Orders Over ₹600
    </Box>
  );
};

export default Announcement;
