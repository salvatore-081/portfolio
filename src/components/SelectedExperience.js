import styled from "styled-components";
import { aHoverAnimation } from "../constants";

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledH1 = styled.h1`
  font-size: 22px;
`;

const StyledEmployerA = styled.a`
  color: var(--secondary-color);
  text-decoration: none;
  position: relative;
  ${aHoverAnimation("-2px")}
`;

const StyledTimeFrameP = styled.p`
  margin: -16px 0 0;
  font-size: 13px;
`;

const StyledBulletContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StyledPlaceholderDiv = styled.div`
  color: var(--secondary-color);
  line-height: 16px;
`;

const StyledBulletP = styled.p``;

function SelectedExperience(props) {
  return (
    <StyledMainDiv>
      <StyledH1>
        {props.experience.position}{" "}
        <StyledEmployerA
          target="_blank"
          alt={props.experience.employer.name}
          rel="noopener noreferrer"
          href={props.experience.employer.url}
        >
          @{props.experience.employer.name}
        </StyledEmployerA>
      </StyledH1>
      <StyledTimeFrameP>
        {props.experience.from} - {props.experience.to}
      </StyledTimeFrameP>

      {props.experience.bullets.map((v, i) => (
        <StyledBulletContainerDiv key={i}>
          <StyledPlaceholderDiv>▹</StyledPlaceholderDiv>
          <StyledBulletP>{v}</StyledBulletP>
        </StyledBulletContainerDiv>
      ))}
    </StyledMainDiv>
  );
}

export default SelectedExperience;
