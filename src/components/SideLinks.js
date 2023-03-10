import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/SideLinks.css";
import { ReactComponent as Github } from "../assets/icons/github-outlined.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin-outlined.svg";
import { ReactComponent as Phone } from "../assets/icons/phone-outlined.svg";
import { ReactComponent as Mail } from "../assets/icons/email-outlined.svg";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function SideLinks() {
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
  }, [prefersReducedMotion]);

  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition
          key={0}
          classNames={`${prefersReducedMotion ? "" : "fadedown"}`}
          timeout={2000}
        >
          <nav className="side-links" style={{ transitionDelay: `1s` }}>
            <a
              href={t("SideLinks.linkedin")}
              target="_blank"
              alt="LinkedIn"
              rel="noopener noreferrer"
            >
              <Linkedin className="side-link-fill" />
            </a>
            <a
              href={t("SideLinks.github")}
              target="_blank"
              alt="GitHub"
              rel="noopener noreferrer"
            >
              <Github className="side-link-fill" />
            </a>
            <a
              href={`tel:${t("SideLinks.phone")}`}
              alt="Phone"
              rel="noopener noreferrer"
            >
              <Phone className="side-link-stroke" />
            </a>
            <a
              href={`mailto:${t("SideLinks.mail")}`}
              alt="email"
              rel="noopener noreferrer"
            >
              <Mail className="side-link-fill" />
            </a>
          </nav>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export default SideLinks;
