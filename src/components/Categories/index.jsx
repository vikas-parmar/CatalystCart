import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ColLarge = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  min-width: 100px;
  width: fit-content;
  height: 50px;
  padding: 10px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  border: none;
  background-color: white;
  text-transform: uppercase;
  font-weight: 500;
`;

const Categories = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      height={{ xs: "100%", sm: "80vh" }}
      gap={1}
      m={1}
    >
      <Col>
        <Row>
          <Image
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </Button>
        </Row>
        <Row>
          <Image
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </Button>
        </Row>
      </Col>
      <Col>
        <Row>
          {" "}
          <Image
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </Button>
        </Row>
      </Col>
      <ColLarge>
        <Row>
          <Col>
            <Row>
              <Image
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <Button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </Button>
            </Row>
          </Col>
          <Col>
            <Row>
              {" "}
              <Image
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <Button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </Button>
            </Row>
          </Col>
        </Row>
        <Row>
          <Image
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </Button>
        </Row>
      </ColLarge>
    </Box>
  );
};

export default Categories;
