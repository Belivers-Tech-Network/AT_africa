import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const Link = styled(NavLink)`
  &:link,
  &:visited {
    display: inline-block;
    font-weight: 500 !important;
    letter-spacing: -0.0075rem !important;
    line-height: 124% !important;
  }

  @media screen and (min-width: 1024px) {
    transition: all 0.4s;
    padding-bottom: 0.2rem;
    border-bottom: 2px solid transparent;

    &:hover,
    &:active {
      border-bottom-color: var(--primary-color);
    }
  }
`;

export const LinkTwo = styled(Link)`
  ${(props) =>
    props.type === "outline" &&
    css`
      &:link,
      &:visited {
        border: 1px solid var(--primary-color);
      }

      &:hover,
      &:active {
        background-color: var(--primary-color);
        color: #fff;
      }
    `}

  ${(props) =>
    props.type === "full" &&
    css`
      &:link,
      &:visited {
        background-color: var(--primary-color);
        color: #fff;
      }

      &:hover,
      &:active {
        background-color: transparent;
        color: var(--primary-color);
      }
    `}

@media screen and (min-width: 768px) {
    border-bottom: none;
  }

  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 0.375rem;
  font-size: 1.4rem;
  line-height: 1.2;
  text-align: center;
`;

export default Link;
