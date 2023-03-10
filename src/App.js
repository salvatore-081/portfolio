import Header from "./components/Header";
import { Suspense } from "react";
import Splash from "./components/Splash";
import About from "./components/About";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import SideLinks from "./components/SideLinks";

function App() {
  return (
    <Suspense fallback={<Splash />}>
      <main>
        <Header />
        <SideLinks />
        <Landing />
        <About />
        <Experience />
      </main>
    </Suspense>
  );
}

export default App;
