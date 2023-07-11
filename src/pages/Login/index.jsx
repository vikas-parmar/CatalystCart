import { Visibility, VisibilityOff } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Box
        width={{ xs: "75%%", sm: "70%", md: "30%" }}
        textAlign={{ xs: "center", sm: "left" }}
        p={2}
        gap={1}
        bgcolor="white"
      >
        <Typography variant="h4" gutterBottom>
          {" "}
          SIGN IN
        </Typography>
        <Box
          component="form"
          display="flex"
          flexWrap="wrap"
          flexDirection="column"
          gap={1}
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          <OutlinedInput
            type="text"
            placeholder="Username Or Number"
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <AccountCircleIcon />
                </IconButton>
              </InputAdornment>
            }
            required
          />
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "40%",
              borderRadius: "0px",
            }}
          >
            LOGIN
          </Button>
          <Box>
            <Link to="/toBeMadeSoon">DO NOT YOU REMEMBER THE PASSWORD?</Link>{" "}
            <br />
            <Link to="/register">CREATE A NEW ACCOUNT</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
