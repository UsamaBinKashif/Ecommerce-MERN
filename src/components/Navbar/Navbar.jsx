import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// left section
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;
// ------

// center section
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 700;
`;
// ------

// right section
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
// ------

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Sheikh Commerce.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
