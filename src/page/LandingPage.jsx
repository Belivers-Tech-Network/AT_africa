import styled from "styled-components";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import NavBar from "../components/NavBar";
import { LinkTwo } from "../ui/Link";
import { FaLongArrowAltRight } from "react-icons/fa";
import InvestmentInfo from "../components/InvestmentInfoSection";

const CallToAction = styled.div`
  padding: 0 2.5rem;
`;

const LinkButton = styled(LinkTwo)`
  font-size: 1.6rem;
  padding: 1.5rem;
  display: flex !important;
  align-items: center;
  gap: 0.6rem;

  background: linear-gradient(to right, goldenrod, rgb(50, 48, 47, 0.5));
`;

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <InfoSection />
      <CallToAction>
        <LinkButton type="full">
          <span>What level of risk suits you best</span>
          <FaLongArrowAltRight size={"2.4rem"} />
        </LinkButton>
      </CallToAction>
      <InvestmentInfo />
    </>
  );
}

export default LandingPage;
