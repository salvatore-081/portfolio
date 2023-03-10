import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "../styles/Landing.css";

function Landing() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return () => {};
    }
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <section className="landing-section">
      <TransitionGroup component={null}>
        {isMounted && [
          <CSSTransition
            key={0}
            timeout={2000}
            classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          >
            <h6 style={{ transitionDelay: `${400}ms` }} className="hello-label">
              {t("Landing.hello")}
            </h6>
          </CSSTransition>,
          <CSSTransition
            key={1}
            timeout={2000}
            classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          >
            <h1 style={{ transitionDelay: `${500}ms` }} className="name-label">
              {t("Landing.name")}
            </h1>
          </CSSTransition>,
          <CSSTransition
            key={2}
            timeout={2000}
            classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          >
            <h2
              style={{ transitionDelay: `${600}ms` }}
              className="subtitle-label"
            >
              {t("Landing.subtitle")}
            </h2>
          </CSSTransition>,
          <CSSTransition
            key={3}
            timeout={2000}
            classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          >
            <p
              style={{ transitionDelay: `${700}ms` }}
              className="description-label"
            >
              {t("Landing.description")}
            </p>
          </CSSTransition>,
        ]}
      </TransitionGroup>
    </section>
  );
}

export default Landing;
