import styled from "styled-components";

const StyledMainDiv = styled.div`
  dispey: flex;
  flex-direction: column;
`;
function SelectedExperience(props) {
  return (
    <StyledMainDiv>
      <div>
        {props.experience.position} @{props.experience.employer.name}
      </div>
      <div>
        {props.experience.from} - {props.experience.to}
      </div>
      {props.experience.bullets.map((v, i) => (
        <div key={i}>{v}</div>
      ))}
    </StyledMainDiv>
  );
}

export default SelectedExperience;
