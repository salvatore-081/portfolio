import { device } from "../constants";
import styled from "styled-components";

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

function SectionTitle(props) {
  return (
    <StyledTitleContainerDiv>
      <StyledTitleIndexSpan>{props.index}</StyledTitleIndexSpan>
      <StyledH1>{props.title}</StyledH1>
      {props?.center ? null : <StyledLineSpan></StyledLineSpan>}
    </StyledTitleContainerDiv>
  );
}

export default SectionTitle;
