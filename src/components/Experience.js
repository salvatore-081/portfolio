import { aHoverAnimation, device, ScrollRevealConfig } from "../constants";
import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";

const StyledSection = styled.section`
  color: var(--secondary-alt-color);
  height: 100vh;
  padding: var(--section-padding);
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${device.desktop} {
    padding: 80px 128px 0 256px;
  }
`;

function Experience() {
  const r = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    ScrollReveal().reveal(r.current, ScrollRevealConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledSection id="experience" ref={r}>
      Experience Works!
    </StyledSection>
  );
}

export default Experience;
