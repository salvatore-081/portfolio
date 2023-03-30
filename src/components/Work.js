import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "scrollreveal";
import { aHoverAnimation, device, ScrollRevealConfig } from "../constants";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const StyledSection = styled.section`
  color: var(--secondary-alt-color);
  padding: var(--section-padding);
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${device.desktop} {
    padding: var(--section-padding-desktop);
  }
`;

function Work() {
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
    <StyledSection id="work" ref={r}>
      <SectionTitle index="03." title={t("Work.title")}></SectionTitle>
      {t("Work.projects", { returnObjects: true }).map((v, i) =>
        i % 2 === 0 ? (
          <WorkCard project={v} key={i} orientation="LTR"></WorkCard>
        ) : (
          <WorkCard project={v} key={i} orientation="RTL"></WorkCard>
        )
      )}
    </StyledSection>
  );
}

export default Work;
