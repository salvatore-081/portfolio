import { device, ScrollRevealConfig } from "../constants";
import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ReactComponent as Github } from "../assets/icons/github-outlined.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin-outlined.svg";
import { ReactComponent as Phone } from "../assets/icons/phone-outlined.svg";
import { ReactComponent as Email } from "../assets/icons/email-outlined.svg";
import { StyledSVG } from "../constants";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: var(--section-padding);
  margin: 0 0 24px;
  @media ${device.desktop} {
    padding: var(--section-padding-desktop);
  }
`;

const StyledLinkedin = styled(Linkedin)`
  ${StyledSVG}
`;

const StyledGithub = styled(Github)`
  ${StyledSVG}
`;

const StyledPhone = styled(Phone)`
  ${StyledSVG}
`;

const StyledEmail = styled(Email)`
  ${StyledSVG}
`;

const StyledIconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${device.desktop} {
    display: none;
  }
`;

const StyledP = styled.p`
  margin: 0;
  text-align: center;
  color: var(--secondary-alt-color);
`;

function Footer() {
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
    <StyledFooter ref={r}>
      <StyledIconsDiv>
        <a
          href={t("SideLinks.linkedin")}
          target="_blank"
          alt="LinkedIn"
          rel="noopener noreferrer"
        >
          <StyledLinkedin fill="true" $prefersReducedMotion={true} />
        </a>
        <a
          href={t("SideLinks.github")}
          target="_blank"
          alt="GitHub"
          rel="noopener noreferrer"
        >
          <StyledGithub fill="true" $prefersReducedMotion={true} />
        </a>
        <a
          href={`tel:${t("SideLinks.phone")}`}
          alt="Phone"
          rel="noopener noreferrer"
        >
          <StyledPhone stroke="true" $prefersReducedMotion={true} />
        </a>
        <a
          href={`mailto:${t("SideLinks.mail")}`}
          alt="email"
          rel="noopener noreferrer"
        >
          <StyledEmail fill="true" $prefersReducedMotion={true} />
        </a>
      </StyledIconsDiv>
      <StyledP>Made with 🤍 by Salvatore Emilio</StyledP>
    </StyledFooter>
  );
}

export default Footer;
