import styled from "styled-components";
import ShoesVideo from "../../assets/nike.mp4";
import { Player, ControlBar } from "video-react";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 76px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const VideoContianer = styled.video`
  width: 100%;
  height: 50%;
`;

const Video = () => {
  return (
    <Main>
      <Title>Always Iconic</Title>
      <VideoContianer autoPlay>
        <source src={ShoesVideo}  type="video/mp4" />
      </VideoContianer>
    </Main>
  );
};

export default Video;
