import "../styles/Splash.css";
import logo from "../assets/logo.svg";

function Splash() {
  return (
    <div className="splash">
      <img className="splash-logo" src={logo} alt="logo"></img>
    </div>
  );
}

export default Splash;
