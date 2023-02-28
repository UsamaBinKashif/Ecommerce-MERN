import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../../utils/responsive";

const InfoContainer = styled.div`
  position: absolute;
  opacity: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const Image = styled.img`
  width: 75%;
  transition: all 0.3s ease;
  cursor: pointer;


`;
const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  position: relative;
  

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
const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Icon clr="008080" title={item.title}>
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

export default Product;
