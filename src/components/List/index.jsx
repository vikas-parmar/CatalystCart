import React from "react";
import styled from "styled-components";
import Card from "../Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

const List = () => {
  return (
    <Container>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default List;
