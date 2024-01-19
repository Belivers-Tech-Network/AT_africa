import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-family: "PT Serif", serif;
  text-wrap: balance;
  font-weight: 400;
  color: var(--primary-color);
  line-height: 116%;
  letter-spacing: 0.01rem;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: clamp(4rem, 2.26vw + 3.3rem, 6.4rem);
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: clamp(3.6rem, 1.88vw + 3.01rem, 5.6rem);
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: clamp(1.8rem, 0.56vw + 1.62rem, 2.4rem);
      font-weight: 550;
      line-height: 124%;
      margin-bottom: 0.8rem;
    `}
`;

export default Heading;
