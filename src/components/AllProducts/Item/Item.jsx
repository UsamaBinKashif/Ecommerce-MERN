import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const InfoContainer = styled.div`
  position: absolute;
  opacity: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 90%;
  transition: all 0.3s ease;
  cursor: pointer;
`;
const Container = styled.div`
  background: #fcfafa;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  position: relative;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &:hover ${InfoContainer} {
    opacity: 1;
  }
  &:hover ${Image} {
    opacity: 0.7;
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #${(props) => props.clr};

  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h2``;
const Item = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <InfoContainer>
        <Icon clr="008080" title={item.name}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon clr="000000">
          <SearchOutlined />
        </Icon>
        <Icon clr="FF0000">
          <FavoriteBorderOutlined />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default Item;
