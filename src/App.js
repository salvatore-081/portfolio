import Header from "./components/Header";
import { Suspense } from "react";
import Splash from "./components/Splash";
import About from "./components/About";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import SideLinks from "./components/SideLinks";
import Work from "./components/Work";
import styled from "styled-components";
import Contact from "./components/Contact";
// import Lol from "./components/Lol";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 140px;
`;

function App() {
  return (
    <Suspense fallback={<Splash />}>
      <StyledMain>
        {/* <Lol /> */}
        <Header />
        <SideLinks />
        <Landing />
        <About />
        <Experience />
        <Work />
        <Contact />
      </StyledMain>
    </Suspense>
  );
}

export default App;
