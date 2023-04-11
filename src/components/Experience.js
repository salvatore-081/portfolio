import { device, ScrollRevealConfig } from "../constants";
import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import SelectedExperience from "./SelectedExperience";

const StyledSection = styled.section`
  color: var(--secondary-alt-color);
  padding: var(--section-padding);
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-x: hidden;
  @media ${device.desktop} {
    padding: 80px 128px 0 28%;
  }
`;

const StyledMainContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const StyledTabsContainerDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  @media ${device.desktop} {
    flex-direction: column;
    align-self: flex-start;
    flex-shrink: 0;
  }
`;

const StyledTabButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  padding: 16px 24px;
  font-size: 13px;
  border: none;
  flex: 0 0 120px;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  color: ${(props) =>
    props.selected ? "var(--secondary-color)" : "var(--secondary-alt-color)"};
  background-color: ${(props) =>
    props.selected ? "var(--primary-alt-color)" : "transparent"};
  border-bottom: 3px solid var(--secondary-alt-color);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus-visible {
    outline: none;
  }

  @media ${device.desktop} {
    padding: 24px 32px;
    flex: auto;
    border-bottom: none;
    border-left: 3px solid var(--secondary-alt-color);
  }
`;

const StyledSelectedHighlightDiv = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 10;
  width: 120px;
  height: 2px;
  background: var(--secondary-color);
  transform: translateX(calc(${(props) => props.selectedIndex} * 120px));
  border-radius: 5px;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;

  @media ${device.desktop} {
    transform: translateY(calc(${(props) => props.selectedIndex} * 63.2px));
    width: 2px;
    height: 63.2px;
    bottom: auto;
    top: 0;
  }
`;

function Experience() {
  const r = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [selectedItem, setSelectedItem] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    ScrollReveal().reveal(r.current, ScrollRevealConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledSection id="experience" ref={r}>
      <SectionTitle index="02." title={t("Experiences.title")}></SectionTitle>
      <StyledMainContainerDiv>
        <StyledTabsContainerDiv>
          {t("Experiences.jobs", { returnObjects: true }).map((v, i) => (
            <StyledTabButton
              aria-pressed={i === selectedItem}
              selected={i === selectedItem}
              onClick={() => setSelectedItem(i)}
              key={i}
            >
              {v.employer.name}
            </StyledTabButton>
          ))}
          <StyledSelectedHighlightDiv
            selectedIndex={selectedItem}
          ></StyledSelectedHighlightDiv>
        </StyledTabsContainerDiv>
        <SelectedExperience
          experience={
            t("Experiences.jobs", { returnObjects: true })[selectedItem]
          }
        ></SelectedExperience>
      </StyledMainContainerDiv>
    </StyledSection>
  );
}

export default Experience;
