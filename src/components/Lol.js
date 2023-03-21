import Cat from "../assets/AggravatingQuaintBittern.webp";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function Lol() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [prefersReducedMotion]);

  return prefersReducedMotion ? null : (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition
          key={0}
          classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          timeout={3000}
        >
          <img
            style={{
              transitionDelay: "2s",
              width: "80px",
              position: "fixed",
              bottom: "0",
              right: "0",
            }}
            src={Cat}
          ></img>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export default Lol;
