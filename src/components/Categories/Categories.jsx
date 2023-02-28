import styled from "styled-components";
import { categories } from "../../utils/data";
import CategoryItem from "./Item/CategoryItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

const CategoryiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
`;

const Categories = () => {
  return (
    <Container>
      <Title>Categories</Title>
      <CategoryiesContainer>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </CategoryiesContainer>
    </Container>
  );
};

export default Categories;
