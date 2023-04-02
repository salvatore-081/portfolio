import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Github } from "../assets/icons/github-outlined.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin-outlined.svg";
import { ReactComponent as Phone } from "../assets/icons/phone-outlined.svg";
import { ReactComponent as Email } from "../assets/icons/email-outlined.svg";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { device } from "../constants";
import styled from "styled-components";
import { StyledSVG } from "../constants";

const StyledNav = styled.nav`
  display: none;
  @media ${device.desktop} {
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transitiondelay: 1s;

    &:after {
      content: "";
      display: block;
      width: 2px;
      height: 90px;
      margin: 0px auto;
      background-color: var(--secondary-alt-color);
    }
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

function SideLinks() {
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
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition
          key={0}
          classNames={`${prefersReducedMotion ? "" : "fadedown"}`}
          timeout={2000}
        >
          <StyledNav>
            <a
              href={t("SideLinks.linkedin")}
              target="_blank"
              alt="LinkedIn"
              rel="noopener noreferrer"
            >
              <StyledLinkedin
                fill="true"
                $prefersReducedMotion={prefersReducedMotion}
              />
            </a>
            <a
              href={t("SideLinks.github")}
              target="_blank"
              alt="GitHub"
              rel="noopener noreferrer"
            >
              <StyledGithub
                fill="true"
                $prefersReducedMotion={prefersReducedMotion}
              />
            </a>
            <a
              href={`tel:${t("SideLinks.phone")}`}
              alt="Phone"
              rel="noopener noreferrer"
            >
              <StyledPhone
                stroke="true"
                $prefersReducedMotion={prefersReducedMotion}
              />
            </a>
            <a
              href={`mailto:${t("SideLinks.mail")}`}
              alt="email"
              rel="noopener noreferrer"
            >
              <StyledEmail
                fill="true"
                $prefersReducedMotion={prefersReducedMotion}
              />
            </a>
          </StyledNav>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export default SideLinks;
