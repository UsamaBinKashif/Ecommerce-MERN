import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color: white;
`;
const InfoContainer = styled.div`
  text-align: center;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 65px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 3px;
`;
const Description = styled.p`
  font-size: 24px;
`;

const Video = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Focus Areas</Title>
        <Description>
          Our priorities include promoting diversity, equity and inclusion for
          all advancing a transparent and responsible supply chain innovating
          sustainable materials and methods of make that focus on our
          environmental impact; building community by investing in organizations
          focused on economic empowerment, and education and equality; and
          bringing today’s generation together through sport and an active
          lifestyle so they can reach their full potential tomorrow.
        </Description>
      </InfoContainer>
    </Container>
  );
};

export default Video;
