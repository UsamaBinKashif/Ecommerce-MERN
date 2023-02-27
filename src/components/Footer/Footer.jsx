import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    font-weight: 600;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NIKE. Impact Taking Action</Logo>
        <Description>
          Our Purpose is to move the world forward. We take action by building
          community, protecting our planet and increasing access to sport.
        </Description>
        <SocialContainer>
          <SocialIcon bg="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="ff0000">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
