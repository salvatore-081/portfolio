import React, { useState, useEffect } from "react";
import useScrollDirection from "../hooks/UseScrollDirection";
import useScrolledDown from "../hooks/UseScrolledDown";
import "../styles/Header.css";
import logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";
import Select from "./Select";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const { i18n, t } = useTranslation();
  const scrollDirection = useScrollDirection();
  const scrolledDown = useScrolledDown();

  const NAV_LINKS = ["about", "experience", "work", "contact"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`header ${scrollDirection === "down" ? "hide" : ""} ${
        scrolledDown && scrollDirection === "up" ? "shadow" : ""
      }`}
    >
      <img className="logo" src={logo} alt="logo"></img>
      <nav className="navigation">
        <TransitionGroup component={null}>
          {isMounted &&
            NAV_LINKS.map((v, i) => (
              <CSSTransition key={i} classNames={"fadedown"} timeout={1000}>
                <div style={{ transitionDelay: `${i * 120}ms` }}>
                  <a href={`#${v}`} className="navigation-link">
                    <span className="navigation-link-index">{`0${
                      i + 1
                    }.`}</span>
                    <span>{t(`Header.${v}`)}</span>
                  </a>
                </div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </nav>
      <TransitionGroup component={null}>
        {isMounted && [
          <CSSTransition
            key={NAV_LINKS.length}
            classNames={"fadedown"}
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
    </div>
  );
}

export default Header;