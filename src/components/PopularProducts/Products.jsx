import styled from "styled-components";
import { popularProducts } from "../../utils/data";
import Product from "./Product/Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ProductContainer = styled.div`
  display: flex;
`;
const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
`;

const Products = () => {
  return (
    <Container>
      <Title>Popular Products</Title>
      <ProductContainer>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default Products;
