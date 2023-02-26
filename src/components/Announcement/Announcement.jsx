import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
`;

const Announcement = () => {
  return (
    <Container>NIKE! JUST DO IT</Container>
  );
};

export default Announcement;
