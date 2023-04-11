import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "scrollreveal";
import { device, ScrollRevealConfig } from "../constants";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const StyledSection = styled.section`
  margin: -72px 0 0;
  color: var(--secondary-alt-color);
  padding: var(--section-padding);
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  @media ${device.desktop} {
    padding: var(--section-padding-desktop);
  }
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 20px;

  @media ${device.desktop} {
    padding: 0 20%;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  font-family: inherit;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  border-radius: 8px;
  transition: all 1s ease;
  cursor: pointer;
  background-color: var(--primary-alt-color);

  ${(props) =>
    props.$prefersReducedMotion
      ? ""
      : `&:hover {
    background-color: var(--primary-alt-color);
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
  }`}

  @media ${device.desktop} {
    ${(props) =>
      props.$prefersReducedMotion
        ? ""
        : `    background-color: inherit;
        color: inherit;
    border: 2px solid var(--secondary-alt-color);`}

    width: auto;
    max-width: 240px;
  }
`;

function Contact() {
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
    <StyledSection id="contact" ref={r}>
      <SectionTitle
        index="04."
        title={t("Contact.title")}
        center={true}
      ></SectionTitle>
      <StyledP>{t("Contact.text")}</StyledP>
      <StyledButton
        $prefersReducedMotion={prefersReducedMotion}
        type="button"
        onClick={() => {
          window.location.href = `mailto:${t("SideLinks.mail")}`;
        }}
      >
        {t("Contact.ctaLabel")}
      </StyledButton>
    </StyledSection>
  );
}

export default Contact;
