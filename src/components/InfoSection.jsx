import styled from "styled-components";
import Heading from "../ui/Headings";
import P from "../ui/ParagraphText";
import infoData from "../data/InfoSectionData";

const Container = styled.div`
  padding: 10rem 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function InfoSection() {
  return (
    <Container>
      <Heading as={"h2"}>
        Professionally managed portfolios, tailored to you.
      </Heading>
      <InnerContainer>
        {infoData.map((item) => (
          <li key={item.id}>
            <Heading as="h3">{item.title}</Heading>
            <P>{item.text}</P>
          </li>
        ))}
      </InnerContainer>
    </Container>
  );
}

export default InfoSection;
