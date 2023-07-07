import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { Box, Button, Typography } from "@mui/material";

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
  &:hover {
    opacity: 0.6;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column; 
  justify-content: center;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 5px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Box
      maxWidth="false"
      height="100vh"
      display={{ xs: "none", sm: "flex" }}
      position="relative"
      overflow="hidden"
    >
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowCircleLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Typography variant="h1" fontSize="5rem" fontWeight="bold">
                {item.title}
              </Typography>
              <Desc>{item.desc}</Desc>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width: "fit-content", p: "10px", fontSize: "1.2rem", letterSpacing: "1px" }}
              >
                SHOW NOW
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowCircleRightOutlinedIcon />
      </Arrow>
    </Box>
  );
};

export default Slider;
