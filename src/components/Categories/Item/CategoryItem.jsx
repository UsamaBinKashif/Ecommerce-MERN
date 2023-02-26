import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 50vh;
  position: relative;
  transition: transform 0.5s; /* Animation */

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
