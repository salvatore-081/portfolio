import React, { useState, useEffect } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import useScrolledDown from "../hooks/useScrolledDown";
import logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";
import Select from "./Select";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import styled, { css } from "styled-components";
import { aHoverAnimation, device } from "../constants";

const StyledHeader = styled.header`
  position: sticky;
  z-index: 9999;
  top: ${(props) => (props.hide ? "-80px" : "0px")};
  background-color: var(--primary-color-transparent);
  backdrop-filter: blur(10px);
  height: 48px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 32px;
  gap: 32px;

  ${(props) =>
    props.shadow &&
    css`
      -webkit-box-shadow: 0px 5px 10px 5px #1a1a1d;
      box-shadow: 0px 5px 10px 5px #1a1a1d;
    `}
`;

const StyledImageLogo = styled.img`
  width: 48px;
  height: 48px;
  margin: auto auto auto 0px;
`;

const StyledNav = styled.nav`
  display: none;
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`;

const StyledNavA = styled.a`
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: relative;
    color: var(--secondary-alt-color);
    cursor: pointer;
    text-decoration: none;
    ${aHoverAnimation("-4px")}
  }
`;

const StyledNavIndexSpan = styled.span`
  @media ${device.desktop} {
    color: var(--secondary-color);
  }
`;

const StyledLabel = styled.label`
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 48px;
  cursor: pointer;
  @media ${device.desktop} {
    display: none;
  }
`;

const StyledSpan = styled.span`
  background: var(--secondary-color);
  border-radius: 10px;
  height: 4px;
  margin: 6px 0;
  transition: 0.2s ease;

  &:nth-of-type(1) {
    width: 50%;
  }

  &:nth-of-type(2) {
    width: 100%;
  }

  &:nth-of-type(3) {
    width: 75%;
  }
`;

const StyledInput = styled.input`
  display: none;
  &:checked ~ ${StyledSpan}:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(6px, 2px);
  }
  &:checked ~ ${StyledSpan}:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }
  &:checked ~ ${StyledSpan}:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(21px, -8px) rotatez(45deg);
  }
`;

const StyledAside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 100vw;
  height: 100vh;
  outline: 0px;
  background-color: var(--primary-alt-color);
  z-index: 9;
  transform: ${(props) =>
    props.$show ? "translateX(0vw)" : "translateX(100vw)"};
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media ${device.desktop} {
    display: none;
  }
`;

function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [showHamburgerMenu, setShowHamburgermenu] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { i18n, t } = useTranslation();
  const scrollDirection = useScrollDirection();
  const scrolledDown = useScrolledDown();

  const NAV_LINKS = Object.keys(t("Header", { returnObjects: true }));

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
    <StyledHeader
      hide={!prefersReducedMotion && scrollDirection === "down"}
      shadow={
        prefersReducedMotion ? true : scrolledDown && scrollDirection === "up"
      }
    >
      <StyledImageLogo src={logo} alt="logo"></StyledImageLogo>
      <StyledLabel>
        <StyledInput
          type="checkbox"
          checked={showHamburgerMenu}
          onChange={(e) => {
            document.body.classList.toggle("noscroll");
            setShowHamburgermenu(e.target.checked);
          }}
        ></StyledInput>
        <StyledSpan></StyledSpan>
        <StyledSpan></StyledSpan>
        <StyledSpan></StyledSpan>
      </StyledLabel>
      <StyledAside $show={showHamburgerMenu}>Aside works!</StyledAside>
      <StyledNav>
        <>
          <TransitionGroup component={null}>
            {isMounted &&
              NAV_LINKS.map((v, i) => (
                <CSSTransition
                  key={i}
                  classNames={`${prefersReducedMotion ? "" : "fadedown"}`}
                  timeout={1000}
                >
                  <div style={{ transitionDelay: `${i * 120}ms` }}>
                    <StyledNavA href={`#${v}`}>
                      <StyledNavIndexSpan>{`0${i + 1}.`}</StyledNavIndexSpan>
                      <span>{t(`Header.${v}`)}</span>
                    </StyledNavA>
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
          <TransitionGroup component={null}>
            {isMounted && [
              <CSSTransition
                key={NAV_LINKS.length}
                classNames={`${prefersReducedMotion ? "" : "fadedown"}`}
                timeout={1000}
              >
                <div style={{ transitionDelay: `${NAV_LINKS.length * 120}ms` }}>
                  <Select
                    value={i18n.language}
                    options={[
                      { value: "en", label: "English" },
                      { value: "it", label: "Italiano" },
                    ]}
                    onSelectChange={(e) => i18n.changeLanguage(e)}
                  />
                </div>
              </CSSTransition>,
            ]}
          </TransitionGroup>
        </>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
