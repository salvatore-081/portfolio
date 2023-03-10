import "../styles/Splash.css";
import logo from "../assets/logo.svg";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function Splash() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="splash">
      <img
        className={`splash-logo ${
          prefersReducedMotion ? "" : "splash-logo-animated"
        }`}
        src={logo}
        alt="logo"
      ></img>
    </div>
  );
}

export default Splash;
