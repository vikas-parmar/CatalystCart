import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { Box } from "@mui/material";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  flex: 2;
  text-transform: capitalize;
`;

const Article = styled.div`
  flex: 3;
  color: gray;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  /* For WebKit browsers */
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  gap: 50px;
`;

const data = [
  {
    id: 1,
    img: "https://assets.ajio.com/medias/sys_master/root/20230628/wymG/649c1a80a9b42d15c913ccfa/-473Wx593H-462323964-pink-MODEL4.jpg",
    img2: "https://assets.ajio.com/medias/sys_master/root/20230628/roXL/649c1847eebac147fc2988f0/-473Wx593H-462323964-pink-MODEL5.jpg",
    title: "Full Sleeves Slim Fit Classic Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus odit voluptatibus ullam a adipisci sapiente nesciunt blanditiis facere cum odio.",
    isNew: true,
    oldPrice: 1849,
    newPrice: 684,
  },
  {
    id: 2,
    img: "https://assets.ajio.com/medias/sys_master/root/20230621/sz1G/6492201642f9e729d7599d47/-1117Wx1400H-463378835-brown-MODEL.jpg",
    img2: "https://assets.ajio.com/medias/sys_master/root/20230621/DNBo/6492201642f9e729d7599d8c/-1117Wx1400H-463378835-brown-MODEL2.jpg",
    title: "Checked Slim Fit Shirt with Patch Pocket",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus odit voluptatibus ullam a adipisci sapiente nesciunt blanditiis facere cum odio.",
    isNew: true,
    oldPrice: 1248,
    newPrice: 1400,
  },
  {
    id: 3,
    img: "https://assets.ajio.com/medias/sys_master/root/20230628/wymG/649c1a80a9b42d15c913ccfa/-473Wx593H-462323964-pink-MODEL4.jpg",
    img2: "https://assets.ajio.com/medias/sys_master/root/20230628/roXL/649c1847eebac147fc2988f0/-473Wx593H-462323964-pink-MODEL5.jpg",
    title: "Full Sleeves Slim Fit Classic Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus odit voluptatibus ullam a adipisci sapiente nesciunt blanditiis facere cum odio.",
    isNew: false,
    oldPrice: 1849,
    newPrice: 684,
  },
  {
    id: 4,
    img: "https://assets.ajio.com/medias/sys_master/root/20230621/sz1G/6492201642f9e729d7599d47/-1117Wx1400H-463378835-brown-MODEL.jpg",
    img2: "https://assets.ajio.com/medias/sys_master/root/20230621/DNBo/6492201642f9e729d7599d8c/-1117Wx1400H-463378835-brown-MODEL2.jpg",
    title: "Checked Slim Fit Shirt with Patch Pocket",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus odit voluptatibus ullam a adipisci sapiente nesciunt blanditiis facere cum odio.",
    isNew: true,
    oldPrice: 1248,
    newPrice: 1400,
  },
  {
    id: 5,
    img: "https://assets.ajio.com/medias/sys_master/root/20230628/wymG/649c1a80a9b42d15c913ccfa/-473Wx593H-462323964-pink-MODEL4.jpg",
    img2: "https://assets.ajio.com/medias/sys_master/root/20230628/roXL/649c1847eebac147fc2988f0/-473Wx593H-462323964-pink-MODEL5.jpg",
    title: "Full Sleeves Slim Fit Classic Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus odit voluptatibus ullam a adipisci sapiente nesciunt blanditiis facere cum odio.",
    isNew: false,
    oldPrice: 1849,
    newPrice: 684,
  },
  {
    id: 6,
    img: "https://assets.ajio.com/medias/sys_master/root/20230621/sz1G/6492201642f9e729d7599d47/-1117Wx1400H-463378835-brown-MODEL.jpg",
    img2: "https://assets.ajio.com/medias/sys_master/root/20230621/DNBo/6492201642f9e729d7599d8c/-1117Wx1400H-463378835-brown-MODEL2.jpg",
    title: "Checked Slim Fit Shirt with Patch Pocket",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus odit voluptatibus ullam a adipisci sapiente nesciunt blanditiis facere cum odio.",
    isNew: true,
    oldPrice: 1248,
    newPrice: 1400,
  },
];

const FeaturedProducts = ({ type }) => {
  return (
    <Box width="100%" p={2}>
      <Top>
        <Title>{type} products</Title>
        <Article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </Article>
      </Top>
      <Bottom>
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Bottom>
    </Box>
  );
};

export default FeaturedProducts;
