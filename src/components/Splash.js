import logo from "../assets/logo.svg";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`;

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 250px;
  height: 250px;
  animation: ${(props) => (props.enabled ? fadeInAnimation : "none")};
`;

function Splash() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <StyledDiv>
      <StyledImg
        animation={!prefersReducedMotion}
        src={logo}
        alt="logo"
      ></StyledImg>
    </StyledDiv>
  );
}

export default Splash;
