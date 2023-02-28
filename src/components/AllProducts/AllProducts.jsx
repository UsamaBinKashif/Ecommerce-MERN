import styled from "styled-components";
import { popularProducts } from "../../utils/data";
import Item from "./Item/Item";
import All from "../../db.json"
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
`;
console.log(All)
const AllProducts = () => {
  return (
    <Container>
      <ProductContainer>
        {All.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default AllProducts;
