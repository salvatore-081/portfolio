import SelectArrow from "../assets/icons/select-arrow.svg";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  cursor: pointer;
  background-color: var(--primary-color);
  gap: 14px;
  display: flex;
  align-items: center;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--secondary-color);
  }
`;

const StyledImg = styled.img`
  position: absolute;
  right: 0;
  pointer-events: none;
  width: 12px;
  height: 12px;
`;

function Select(props) {
  return (
    <StyledDiv>
      <select
        value={props.value}
        name="lang"
        onChange={(e) => props.onSelectChange(e.target.value)}
      >
        {props.options.map((el) => (
          <option key={el.value} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
      <StyledImg src={SelectArrow} alt="select arrow icon"></StyledImg>
    </StyledDiv>
  );
}

export default Select;
