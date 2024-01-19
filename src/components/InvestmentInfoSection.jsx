import styled from "styled-components";
import Heading from "../ui/Headings";
import P from "../ui/ParagraphText";
import InvestmentInfoCard from "./InvestmentInfoCard";

const Container = styled.div`
  padding: 10rem 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
`;

const InnerContainer = styled.div``;

function InvestmentInfo() {
  return (
    <Container>
      <HeaderInfo>
        <Heading as={"h2"}>Investing that fits your goals and values</Heading>
        <P>
          We’ll get to know you and what you’re saving for, then place you in a
          portfolio that helps you get there.
        </P>
      </HeaderInfo>
      <InnerContainer>
        <InvestmentInfoCard />
      </InnerContainer>
    </Container>
  );
}

export default InvestmentInfo;
