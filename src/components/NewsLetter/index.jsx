import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

const NewsLetter = () => {
  return (
    <Box
      height="60vh"
      bgcolor="primary.light"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2" fontWeight="600" mb={2}>
        Newsletter
      </Typography>
      <Typography variant="p" textAlign="center" mb={2}>
        Shop fashion and garments online at CatalystCart. Stay stylish with our
        curated collection and enjoy a seamless shopping experience. Elevate
        your wardrobe today!
      </Typography>
      <Paper
        component="form"
        elevation={0}
        sx={{
          width: "50%",
          minWidth: "230px",
          border: "1px solid lightgray",
          display: "flex",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, height: "1rem" }}
          placeholder="Enter Your Email Please..!"
          inputProps={{ "aria-label": "Send" }}
        />
        <IconButton type="button" size="small" aria-label="Send">
          <Send color="primary" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default NewsLetter;
