import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import ScrollReveal from "scrollreveal";
import { aHoverAnimation, device, ScrollRevealConfig } from "../constants";
import styled, { css } from "styled-components";
import Curt from "../assets/images/curt.png";
import Goup from "../assets/images/goup.png";
import { ReactComponent as Github } from "../assets/icons/github-outlined.svg";

const images = {
  curt: Curt,
  goup: Goup,
};

const StyledSVG = css`
width: 24px;
height: 24px;
transition: 0.2s;
fill: ${({ fill, prefersReducedMotion }) =>
  fill === "true"
    ? prefersReducedMotion
      ? "var(--secondary-color)"
      : "var(--secondary-alt-color)"
    : "inital"};
stroke: ${({ stroke, prefersReducedMotion }) =>
  stroke === "true"
    ? prefersReducedMotion
      ? "var(--secondary-color)"
      : "var(--secondary-alt-color)"
    : "inital"};
}
&:hover, &:focus {
  transform: ${({ prefersReducedMotion }) =>
    prefersReducedMotion ? "none" : "scale(1.1)"};
  fill: ${({ fill }) =>
    fill === "true" ? "var(--secondary-color)" : "inital"};
  stroke: ${({ stroke }) =>
    stroke === "true" ? "var(--secondary-color)" : "inital"};
}
`;

const StyledGithub = styled(Github)`
  ${StyledSVG}
`;

const StyledCardDiv = styled.div`
  width: 100%;
  position: relative;
  margin: 0;

  &:before {
    border-radius: 8px;
    content: "";
    z-index: -1;
    position: absolute;
    opacity: 0.2;
    filter: invert(19%) sepia(5%) saturate(437%) hue-rotate(187deg)
      brightness(99%) contrast(50%);
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  @media ${device.desktop} {
    margin: 0 0 72px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    &:before {
      display: none;
    }
  }
`;

const StyledCardContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > * {
    margin: 0 32px;
  }

  @media ${device.desktop} {
    flex: 1 1 0;
    & > * {
      margin: ${(props) =>
        props.orientation === "LTR" ? "0 -25% 0 0" : "0 0 0 -25%"};
      text-align: ${(props) =>
        props.orientation === "LTR" ? "left" : "right"};
      z-index: 1;
    }
  }
`;

const StyledDesktopImg = styled.img`
  display: none;
  @media ${device.desktop} {
    cursor: pointer;
    border-radius: 10px;
    flex: 2 1 0;
    width: 100%;
    height: auto;
    display: block;
    filter: grayscale(100%);
    transition: all 0.5s ease 0s;
    &:hover {
      filter: none;
    }
  }
`;

const StyledH1 = styled.h1`
  margin-top: 24px;
`;

const StyledTitleA = styled.a`
  color: var(--secondary-color);
  text-decoration: none;
  position: relative;
  font-size: 32px;
  font-weight: bold;
  ${aHoverAnimation("1px")}
`;

const StyledP = styled.p`
  font-size: 18px;
  @media ${device.desktop} {
    background-color: var(--primary-alt-color);
    border-radius: 10px;
    padding: 16px;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  gap: 24px;
  vertical-gap: 1px;
  padding: 0;

  @media ${device.desktop} {
    justify-content: ${(props) =>
      props.orientation === "LTR" ? "flex-start" : "flex-end"};
  }
`;

const StyledLi = styled.li``;

const StyledLiA = styled.a`
  color: var(--secondary-alt-color);
  text-decoration: none;
  position: relative;
  ${aHoverAnimation("-1px")}
`;

const StyledLinksUl = styled(StyledUl)`
  margin-top: 16px;
  margin-bottom: 24px;
  justify-content: flex-end;
  @media ${device.desktop} {
    justify-content: ${(props) =>
      props.orientation === "LTR" ? "flex-start" : "flex-end"};
  }
`;

function WorkCard(props) {
  const r = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    ScrollReveal().reveal(r.current, ScrollRevealConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledCardDiv
      background={images[props.project.name.toLowerCase()]}
      ref={r}
    >
      {props.orientation === "RTL" ? (
        <a
          href={props.project.url}
          target="_blank"
          alt={props.project.name}
          rel="noopener noreferrer"
        >
          <StyledDesktopImg
            src={images[props.project.name.toLowerCase()]}
          ></StyledDesktopImg>
        </a>
      ) : undefined}
      <StyledCardContentDiv orientation={props.orientation}>
        <StyledH1>
          <StyledTitleA
            href={props.project.url}
            target="_blank"
            alt={`${props.project.name} link`}
            rel="noopener noreferrer"
          >
            {props.project.name}
          </StyledTitleA>
        </StyledH1>
        <StyledP>{props.project.description}</StyledP>
        <StyledUl orientation={props.orientation}>
          {props.project.skills.map((v, i) => (
            <StyledLi key={i}>
              <StyledLiA
                href={v.url}
                target="_blank"
                alt={v.name}
                rel="noopener noreferrer"
              >
                {v.name}
              </StyledLiA>
            </StyledLi>
          ))}
        </StyledUl>
        <StyledLinksUl orientation={props.orientation}>
          {props.project?.github && (
            <li>
              {" "}
              <a
                href={props.project.github}
                target="_blank"
                alt="GitHub"
                rel="noopener noreferrer"
              >
                <StyledGithub
                  fill="true"
                  $prefersReducedMotion={prefersReducedMotion}
                />
              </a>
            </li>
          )}
        </StyledLinksUl>
      </StyledCardContentDiv>
      {props.orientation === "LTR" ? (
        <a
          href={props.project.url}
          target="_blank"
          alt={props.project.name}
          rel="noopener noreferrer"
        >
          <StyledDesktopImg
            src={images[props.project.name.toLowerCase()]}
          ></StyledDesktopImg>
        </a>
      ) : undefined}
    </StyledCardDiv>
  );
}

export default WorkCard;
