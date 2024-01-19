import styled from "styled-components";

const StyledAppLogo = styled.img`
  width: auto;
  height: 3.2rem;
`;

function AppLogo() {
  return <StyledAppLogo src="./appLogo.svg" alt="App Logo" />;
}

export default AppLogo;
