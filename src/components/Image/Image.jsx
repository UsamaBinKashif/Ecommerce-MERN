import styled from "styled-components";
import Photo from "../../assets/shoes.jpg";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
`;

const Video = () => {
  return (
    <Main>
      <Image src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_952,c_limit/5e4a0ef7-a2c9-483a-8e5b-45d8277db19d/nike-just-do-it.jpg" />
    </Main>
  );
};

export default Video;
