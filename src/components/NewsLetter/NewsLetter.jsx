import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../utils/responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "30vh" })}
  
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;
const Description = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
cursor: pointer;

`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
