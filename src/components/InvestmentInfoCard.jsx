import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";
import P from "../ui/ParagraphText";

import pieChart from "../images/PieChart.png";

const Container = styled.div``;

const LinkContainer = styled.div`
  display: inline-block;
  margin-top: 2rem;
`;

const Links = styled(Link)`
  display: block;
  background: #f9f2ef;

  border-radius: 1.2rem;
  height: 100%;
  overflow: hidden;
  padding-top: 3.2rem;
`;

const LinksTwo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  padding: 1.5rem;
  color: #fff;
  border-radius: 100px;
`;

const InfoDiv = styled.div`
  padding: 0 2.5rem 2.5rem;
  background: #f9f2ef;
`;

const H3 = styled.h3`
  font-size: clamp(3.6rem, 0.38vw + 3.48rem, 4rem);
  font-weight: 500;
  letter-spacing: -0.0075em;
  font-family: futura-pt, system-ui, "Helvetica Neue", sans-serif;
  line-height: 116%;
  margin-bottom: 0.8rem;
  color: #32302f;
`;

const ImgDiv = styled.div`
  background: #f9f2ef;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0rem 3rem 0;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
`;

function InvestmentInfoCard({ img }) {
  const [isHover, setIsHover] = useState(null);

  return (
    <Container>
      <Links>
        <InfoDiv>
          <H3>Classic portfolio</H3>
          <P>
            Smart and diversified, built for long-term growth in fluctuating
            markets with a wide range of low-fee ETFs.
          </P>
          <LinkContainer>
            <LinksTwo>
              {isHover ? <FaArrowRightLong /> : <FaArrowRight />}
            </LinksTwo>
          </LinkContainer>
        </InfoDiv>
        <ImgDiv>
          <Img src={pieChart} />
        </ImgDiv>
      </Links>
    </Container>
  );
}

export default InvestmentInfoCard;
