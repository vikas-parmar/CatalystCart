import styled from "styled-components";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { List } from "components";

const Left = styled.div`
  flex: 1;
  position: sticky;
  height: 100%;
  top: 50px;
`;

const FilterItem = styled.div`
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  font-weight: 400;
  margin-bottom: 20px;
`;

const InputItem = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input``;

const Label = styled.label`
  margin-left: 10px;
`;

const Right = styled.div`
  flex: 3;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 50px;
`;

const ProductList = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  return (
    <Box display="flex" py={1} px={2}>
      <Left>
        <FilterItem>
          <Heading>Products Categories</Heading>
          <InputItem>
            <Input type="checkbox" id="1" value={1} />
            <Label htmlFor="1">Shoes</Label>
          </InputItem>
          <InputItem>
            <Input type="checkbox" id="2" value={2} />
            <Label htmlFor="2">Skirts</Label>
          </InputItem>
          <InputItem>
            <Input type="checkbox" id="3" value={3} />
            <Label htmlFor="3">Coats</Label>
          </InputItem>
        </FilterItem>
        <FilterItem>
          <Heading>Filter by price</Heading>
          <span>0</span>
          <Input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </FilterItem>
        <FilterItem>
          <Heading>Sort By</Heading>
          <InputItem>
            <Input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <Label htmlFor="asc">Price (Lowest first)</Label>
          </InputItem>
          <InputItem>
            <Input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <Label htmlFor="desc">Price (Highest first)</Label>
          </InputItem>
        </FilterItem>
      </Left>
      <Right>
        <Image
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </Right>
    </Box>
  );
};

export default ProductList;