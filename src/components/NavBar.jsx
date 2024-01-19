import styled, { css } from "styled-components";
import AppLogo from "../ui/AppLogo";
import { HiMiniBars2 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

import navData from "../data/NavData";
import Link, { LinkTwo } from "../ui/Link";
import { useRef, useState } from "react";

const Nav = styled.nav`
  padding: 1rem 1.3rem;
  display: flex;
  flex-direction: column;
  max-width: 128rem;
  margin: 0 auto;
  background-color: #fcfcfc;
  border-bottom: 1px solid grey;

  @media screen and (min-width: 768px) {
    padding: 2rem 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 4rem;
    border: none;
  }

  @media screen and (min-width: 1200px) {
    gap: 15rem;
  }
`;

const AppLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleIcon = styled.span`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  overflow: hidden;
  transition: all 0.4s;

  @media screen and (min-width: 1024px) {
    height: auto !important;
  }
`;

const InnerLinksContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 0 2rem;

  ${(props) =>
    props.type === "main" &&
    css`
      align-items: center;
      gap: 3rem;
    `}

  ${(props) =>
    props.type === "other" &&
    css`
      gap: 2rem;
    `}

    @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
    gap: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    gap: 2rem;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const linkRefContainer = useRef(null);
  const linkRefLink = useRef(null);

  const handleNavToggle = () => {
    setNavOpen((open) => !open);
  };

  const linkStyles = {
    height: navOpen
      ? `${linkRefLink.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <div>
      <Nav>
        <AppLogoContainer>
          <AppLogo />
          <ToggleIcon onClick={handleNavToggle}>
            {navOpen ? (
              <AiOutlineClose size={"3rem"} />
            ) : (
              <HiMiniBars2 size={"3rem"} />
            )}
          </ToggleIcon>
        </AppLogoContainer>

        <LinksContainer ref={linkRefContainer} style={linkStyles}>
          <InnerLinksContainer ref={linkRefLink}>
            <ListContainer type="main">
              {navData.map((item) => (
                <ListItem key={item.id}>
                  <Link>{item.text}</Link>
                  {item.icon !== "" && <item.icon />}
                </ListItem>
              ))}
            </ListContainer>

            <ListContainer type="other">
              <ListItem>
                <LinkTwo type="outline">Login</LinkTwo>
              </ListItem>
              <ListItem>
                <LinkTwo type="full">Get started</LinkTwo>
              </ListItem>
            </ListContainer>
          </InnerLinksContainer>
        </LinksContainer>
      </Nav>
    </div>
  );
}

export default NavBar;
