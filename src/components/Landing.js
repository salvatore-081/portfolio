import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { device } from "../constants";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const StyledSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  padding: var(--section-padding);
  @media ${device.desktop} {
    padding: var(--section-padding-desktop);
  }
`;

const StyledH6 = styled.h6`
  font-size: 16px;
  color: var(--secondary-alt-color);
  transitiondelay: 400ms;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  line-height: 40px;
  font-weight: bold;
  color: var(--secondar-color);
  transitiondelay: 500ms;
  @media ${device.desktop} {
    font-size: 80px;
    line-height: 80px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 40px;
  line-height: 40px;
  font-weight: bold;
  margin: -16px 0 0;
  color: var(--secondary-alt-color);
  transitiondelay: 600ms;
  @media ${device.desktop} {
    font-size: 80px;
    line-height: 80px;
  }
`;

const StyledP = styled.p`
  font-size: 20px;
  color: var(--secondary-alt-color);
  margin: 32px 0 0;
  transitiondelay: 700ms;

  @media ${device.desktop} {
    margin: 24px 40% 0 0;
  }
`;

function Landing() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation();

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

  return (
    <StyledSection>
      <TransitionGroup component={null}>
        {isMounted && [
          <CSSTransition
            key={0}
            timeout={2000}
            classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          >
            <StyledH6>{t("Landing.hello")}</StyledH6>
          </CSSTransition>,
          <CSSTransition
            key={1}
            timeout={2000}
            classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          >
            <StyledH1>{t("Landing.name")}</StyledH1>
          </CSSTransition>,
          <CSSTransition
            key={2}
            timeout={2000}
            classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          >
            <StyledH2>{t("Landing.subtitle")}</StyledH2>
          </CSSTransition>,
          <CSSTransition
            key={3}
            timeout={2000}
            classNames={`${prefersReducedMotion ? "" : "fadeup"}`}
          >
            <StyledP>{t("Landing.description")}</StyledP>
          </CSSTransition>,
        ]}
      </TransitionGroup>
    </StyledSection>
  );
}

export default Landing;
