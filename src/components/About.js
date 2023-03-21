import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "scrollreveal";
import { aHoverAnimation, device, ScrollRevealConfig } from "../constants";
import styled from "styled-components";
import { translationVarReplace } from "../utils/translationVarReplace";
import me from "../assets/images/me.jpg";

const StyledSection = styled.section`
  color: var(--secondary-alt-color);
  height: 100vh;
  padding: var(--section-padding);
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${device.desktop} {
    padding: var(--section-padding-desktop);
  }
`;

const StyledTitleContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-end;
  font-weight: bold;
`;

const StyledTitleIndexSpan = styled.span`
  font-size: 20px;
`;

const StyledH1 = styled.h1`
  font-size: 26px;
  line-height: 26px;
  color: var(--secondary-color);
  @media ${device.desktop} {
    font-size: 32px;
    line-height: 32px;
  }
`;

const StyledLineSpan = styled.span`
  margin: auto auto auto 8px;
  flex-grow: 1;
  display: block;
  border-bottom: 2px solid var(--secondary-alt-color);
  height: 35%;
  align-self: center;
  @media ${device.desktop} {
    max-width: 30vw;
  }
`;

const StyledContentContainerDiv = styled.div`
  display: grid;
  gap: 40px;
  justify-items: center;
  @media ${device.desktop} {
    grid-template-columns: 3fr 2fr;
    gap: 80px;
  }
`;

const StyledTextContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${device.desktop} {
    flex: calc(50% - 40px);
  }
`;

const StyledP = styled.p`
  font-size: 18px;
  @media ${device.desktop} {
    font-size: 20px;
  }
`;

const StyledA = styled.a`
  color: var(--secondary-color);
  text-decoration: none;
  position: relative;
  ${aHoverAnimation("0px")}
`;

const StyledSkillsContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledSkillContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex: 50%;
  margin: 0 0 16px;
`;

const StyledPlaceholderDiv = styled.div`
  color: var(--secondary-color);
  line-height: 16px;
`;

const StyledSkillA = styled(StyledA)`
  color: var(--secondary-alt-color);
`;

const StyledImgContainer = styled.div`
  position: relative;
  height: fit-content;
  &:after {
    border: 2px solid var(--secondary-alt-color);
    top: 16px;
    left: 16px;
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all 0.5s ease;
  }
  ${(props) =>
    props.prefersReducedMotion
      ? ""
      : ` &:hover:after {
    border: 2px solid var(--secondary-color);
    top: 8px;
    left: 8px;
  }`}
`;

const StyledImg = styled.img`
  height: auto;
  width: 100%;
  max-width: 360px;
  border-radius: 10px;
  filter: ${(props) =>
    props.prefersReducedMotion ? "none" : "grayscale(100%);"}
  transition: all 0.5s ease;
  content: "";
  &:hover {
    filter: none;
  }
`;

function About() {
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
    <StyledSection id="about" ref={r}>
      <StyledTitleContainerDiv>
        <StyledTitleIndexSpan>01.</StyledTitleIndexSpan>
        <StyledH1>{t("About.title")}</StyledH1>
        <StyledLineSpan></StyledLineSpan>
      </StyledTitleContainerDiv>
      <StyledContentContainerDiv>
        <StyledTextContainerDiv>
          {t("About.paragraphs", { returnObjects: true }).map((v, i) => {
            return (
              <StyledP key={i}>
                {translationVarReplace(v.text, v.vars, StyledA)}
              </StyledP>
            );
          })}
          <StyledSkillsContainerDiv>
            {t("About.skills", { returnObjects: true }).map((v, i) => {
              return (
                <StyledSkillContainerDiv key={i}>
                  <StyledPlaceholderDiv>▹</StyledPlaceholderDiv>
                  <StyledSkillA href={v.url}>{v.label}</StyledSkillA>
                </StyledSkillContainerDiv>
              );
            })}
          </StyledSkillsContainerDiv>
        </StyledTextContainerDiv>
        <StyledImgContainer prefersReducedMotion={prefersReducedMotion}>
          <StyledImg
            prefersReducedMotion={prefersReducedMotion}
            src={me}
          ></StyledImg>
        </StyledImgContainer>
      </StyledContentContainerDiv>
    </StyledSection>
  );
}

export default About;
