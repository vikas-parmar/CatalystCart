import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import HomeIcon from "@mui/icons-material/Home";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Note = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={3}
    >
      <Button variant="contained" onClick={handleClickOpen}>
        Open Note dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <DialogTitle id="title">{"Yet to Built"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="description">
            This functionality will be available soon! Thank you for visiting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Okay, No problem!
          </Button>
        </DialogActions>
      </Dialog>
      <Link to="/">
        <IconButton>
          <HomeIcon fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
};

export default Note;
