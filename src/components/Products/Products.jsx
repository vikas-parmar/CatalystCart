import styled from "styled-components";
import { LatestArrivals } from "data";
import Product from "components/Products/Product";

const Container = styled.div`
  paddding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {LatestArrivals.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
