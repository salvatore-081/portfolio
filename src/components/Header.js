import useScrollDirection from "../hooks/UseScrollDirection";
import useScrolledDown from "../hooks/UseScrolledDown";
import "./Header.css";
import logo from "../assets/logo.svg";

function Header() {
  const scrollDirection = useScrollDirection();
  const scrolledDown = useScrolledDown();

  return (
    <div
      className={`header ${scrollDirection === "down" ? "hide" : ""} ${
        scrolledDown && scrollDirection === "up" ? "down" : ""
      }`}
    >
      <img src={logo}></img>
      <div>Disappearing Header</div>
    </div>
  );
}

export default Header;
