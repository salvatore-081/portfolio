import { useTranslation } from "react-i18next";
import "../styles/SideLinks.css";
import { ReactComponent as Github } from "../assets/icons/github-outlined.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin-outlined.svg";
import { ReactComponent as Phone } from "../assets/icons/phone-outlined.svg";
import { ReactComponent as Mail } from "../assets/icons/email-outlined.svg";

function SideLinks() {
  const { t } = useTranslation();
  return (
    <nav className="side-links">
      <a href={t("SideLinks.linkedin")} target="_blank" alt="LinkedIn">
        <Linkedin className="side-link-fill" />
      </a>
      <a href={t("SideLinks.github")} target="_blank" alt="GitHub">
        <Github className="side-link-fill" />
      </a>
      <a href={`tel:${t("SideLinks.phone")}`} alt="Phone">
        <Phone className="side-link-stroke" />
      </a>
      <a href={`mailto:${t("SideLinks.mail")}`} alt="email">
        <Mail className="side-link-fill" />
      </a>
    </nav>
  );
}

export default SideLinks;
