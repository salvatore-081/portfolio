import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Method from "./components/Method";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Mostra gli elementi [data-reveal] quando entrano nel viewport
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App({ i18n }) {
  useReveal();

  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStyle />
      <Header />
      <main id="main">
        <Hero />
        <Method />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </I18nextProvider>
  );
}
