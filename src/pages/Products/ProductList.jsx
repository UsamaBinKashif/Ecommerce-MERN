import { Star } from "@mui/icons-material";
import styled from "styled-components";
import AllProducts from "../../components/AllProducts/AllProducts";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option selected disabled>
              Price
            </Option>
            <Option>Ascending</Option>
            <Option>Descending</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected disabled>
              Rating
            </Option>
            <Option>⭐</Option>
            <Option>⭐ ⭐</Option>
            <Option>⭐ ⭐ ⭐</Option>
            <Option>⭐ ⭐ ⭐ ⭐</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <AllProducts />
    </Container>
  );
};

export default ProductList;
