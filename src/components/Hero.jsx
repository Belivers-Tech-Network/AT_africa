import styled from "styled-components";
import bgImg2 from "../images/bgImg2.jpg";
import bizVideo from "../video/bizVideo.mp4";

import Heading from "../ui/Headings";
import P from "../ui/ParagraphText";
import { LinkTwo } from "../ui/Link";

const Link = styled(LinkTwo)`
  font-size: 1.7rem;
  padding: 1.8rem 2.3rem;
  border-radius: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0rem 0;
  background-color: #fcfcfc;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 2.5rem;
`;

const H1Container = styled.div``;
const PContainer = styled.div`
  margin: 1.2rem 0 3.2rem;
`;
const LinkContainer = styled.div``;

const VideoContainer = styled.div`
  position: relative;
  margin: 5rem 0 0;
  min-height: 54rem;

  background-image: url(${bgImg2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const VideoBox = styled.div`
  border: 5px solid goldenrod;
  border-radius: 12px;
  height: 40rem;
  width: 25rem;
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Video = styled.video`
  border-radius: 12px;
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
`;

function Hero() {
  return (
    <Container>
      <InfoContainer>
        <H1Container>
          <Heading as="h1">Managed investing made to grow your wealth</Heading>
        </H1Container>
        <PContainer>
          <P>
            We'll build you a smart, sophisticated investment portfolio designed
            to help you achieve your goals.
          </P>
        </PContainer>
        <LinkContainer>
          <Link type="full">Download the app</Link>
        </LinkContainer>
      </InfoContainer>
      <VideoContainer>
        <Overlay></Overlay>
        <VideoBox>
          <Video autoPlay="autoPlay" muted loop controls={true}>
            <source src={bizVideo} type="video/mp4" />
          </Video>
        </VideoBox>
      </VideoContainer>
    </Container>
  );
}

export default Hero;
