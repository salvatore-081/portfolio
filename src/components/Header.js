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

function Header() {
  const [isMounted, setIsMounted] = useState(false);
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
