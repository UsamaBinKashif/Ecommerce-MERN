import styled from "styled-components";
import { popularProducts } from "../../utils/data";
import Product from "./Product/Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
