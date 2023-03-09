import "../styles/Select.css";
import SelectArrow from "../assets/select-arrow.svg";

function Select(props) {
  return (
    <div className="select">
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
      <img className="select-arrow" src={SelectArrow}></img>
    </div>
  );
}

export default Select;
