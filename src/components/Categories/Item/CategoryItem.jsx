import styled from "styled-components";
import { mobile } from "../../../utils/responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 50vh;
  position: relative;
  transition: transform 0.5s; /* Animation */
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const InfoContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: 700;
  margin-top: 10px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Title>{item.title}</Title>
      </InfoContainer>
    </Container>
  );
};

export default CategoryItem;
