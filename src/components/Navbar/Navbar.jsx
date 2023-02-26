import React from "react";
import styled from "styled-components";
import { Mail, Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

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
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
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
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Sheikh.</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Mail color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
