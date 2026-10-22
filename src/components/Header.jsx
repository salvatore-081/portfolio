import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../styles";
import { languagePath } from "../i18n";
import { Container } from "./Section";
import { CloseIcon, Logo, MenuIcon, MoonIcon, SunIcon } from "./Icons";

export const sections = ["method", "experience", "skills", "projects", "contact"];

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--header-bg);
  backdrop-filter: saturate(1.4) blur(12px);
  -webkit-backdrop-filter: saturate(1.4) blur(12px);
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? "var(--line)" : "transparent")};
  transition: border-color 0.3s ease;
`;

const StyledBar = styled(Container)`
  height: var(--header-height);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledHome = styled.a`
  display: flex;
  color: var(--text);
  margin-right: auto;

  svg {
    width: 36px;
    height: auto;
  }
`;

const StyledNav = styled.nav`
  display: none;

  @media ${device.desktop} {
    display: flex;
    gap: 28px;
    margin-right: 16px;
  }
`;

const StyledNavLink = styled.a`
  font-size: 15px;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text);
  }
`;

const StyledIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 8px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: none;
  color: var(--text);
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--line);
  }
`;

const StyledMenuButton = styled(StyledIconButton)`
  @media ${device.desktop} {
    display: none;
  }
`;

// L'icona del tema si sceglie via CSS, così il markup prerenderizzato è identico in chiaro e in scuro
const StyledThemeButton = styled(StyledIconButton)`
  .moon {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) & .sun {
      display: none;
    }
    :root:not([data-theme="light"]) & .moon {
      display: block;
    }
  }

  :root[data-theme="dark"] & .sun {
    display: none;
  }
  :root[data-theme="dark"] & .moon {
    display: block;
  }
`;

const StyledMobileNav = styled.nav`
  border-top: 1px solid var(--line);
  padding: 8px 0 16px;

  ul {
    list-style: none;
  }

  a {
    display: block;
    padding: 12px 0;
    font-family: var(--font-display);
    font-size: 24px;
    color: var(--text);
    text-decoration: none;
  }

  @media ${device.desktop} {
    display: none;
  }
`;

const StyledSkipLink = styled.a`
  position: absolute;
  left: 16px;
  top: -48px;
  padding: 8px 16px;
  background: var(--accent);
  color: var(--accent-contrast);
  border-radius: 8px;
  z-index: 20;

  &:focus {
    top: 12px;
  }
`;

function isDark() {
  const theme = document.documentElement.dataset.theme;
  if (theme) return theme === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function toggleTheme() {
  const next = isDark() ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.removeAttribute("media");
    meta.content = next === "dark" ? "#161514" : "#f7f4ee";
  });
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // senza storage il tema vale solo per la visita corrente
  }
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef(null);
  const otherLanguage = i18n.language === "it" ? "en" : "it";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <StyledHeader $scrolled={scrolled || open}>
      <StyledSkipLink href="#main">{t("nav.skip")}</StyledSkipLink>
      <StyledBar>
        <StyledHome href="#top" aria-label={t("nav.home")}>
          <Logo />
        </StyledHome>
        <StyledNav aria-label={t("nav.primaryLabel")}>
          {sections.map((id) => (
            <StyledNavLink key={id} href={`#${id}`}>
              {t(`nav.${id}`)}
            </StyledNavLink>
          ))}
        </StyledNav>
        <StyledIconButton
          as="a"
          href={languagePath[otherLanguage]}
          hrefLang={otherLanguage}
          lang={otherLanguage}
          aria-label={t("nav.languageLabel")}
          title={t("nav.languageLabel")}
        >
          {t("nav.language")}
        </StyledIconButton>
        <StyledThemeButton type="button" onClick={toggleTheme} aria-label={t("nav.theme")} title={t("nav.theme")}>
          <SunIcon className="sun" />
          <MoonIcon className="moon" />
        </StyledThemeButton>
        <StyledMenuButton
          ref={menuButton}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t("nav.closeMenu") : t("nav.menu")}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </StyledMenuButton>
      </StyledBar>
      {open && (
        <StyledMobileNav id="mobile-nav" aria-label={t("nav.mobileLabel")}>
          <Container as="ul">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </Container>
        </StyledMobileNav>
      )}
    </StyledHeader>
  );
}
