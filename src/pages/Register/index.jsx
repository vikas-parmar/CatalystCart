import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Register = () => {
  return (
    <Container>
      <Box
        width={{ xs: "80%", sm: "70%", md: "40%" }}
        textAlign={{ xs: "center", sm: "left" }}
        p={2}
        bgcolor="white"
      >
        <Typography variant="h4" gutterBottom>
          CREATE AN ACCOUNT
        </Typography>
        <Box
          component="form"
          display="flex"
          flexWrap="wrap"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          <Input type="text" maxLength="30" placeholder="First Name" required />
          <Input type="text" maxLength="30" placeholder="Last Name" required />
          <Input
            type="text"
            maxLength="50"
            placeholder="Create Username"
            required
          />
          <Input type="email" placeholder="Enter Your Email" required />
          <Input type="password" placeholder="Create Password" required />
          <Input type="password" placeholder="Confirm Password" required />

          <Typography variant="subtitle1" mt={{ xs: 1, sm: 2 }} gutterBottom>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "40%",
              p: "15px 20px",
              borderRadius: "0px",
            }}
          >
            CREATE
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
