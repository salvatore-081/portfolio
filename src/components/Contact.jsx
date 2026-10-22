import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../styles";
import Section from "./Section";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./Icons";

const StyledGrid = styled.div`
  display: grid;
  gap: 40px;

  @media ${device.desktop} {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 64px;
    align-items: start;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    color: var(--muted);
    max-width: 52ch;
  }
`;

const StyledEmail = styled.a`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--accent);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
  overflow-wrap: anywhere;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  border-top: 1px solid var(--line);

  a {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid var(--line);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--accent);
  }

  span {
    margin-left: auto;
    color: var(--muted);
    font-size: 15px;
    text-align: right;
    overflow-wrap: anywhere;
  }
`;

export default function Contact() {
  const { t } = useTranslation();
  const external = { target: "_blank", rel: "noopener noreferrer" };
  const links = [
    { icon: MailIcon, label: t("contact.email"), value: t("links.email"), href: `mailto:${t("links.email")}` },
    { icon: PhoneIcon, label: t("contact.phone"), value: t("links.phone"), href: `tel:${t("links.phoneHref")}` },
    { icon: LinkedinIcon, label: t("contact.linkedin"), value: "salvatore-emilio", href: t("links.linkedin"), ...external },
    { icon: GithubIcon, label: t("contact.github"), value: "salvatore-081", href: t("links.github"), ...external },
    { icon: DownloadIcon, label: t("contact.cv"), value: "cloud.salvatoreemilio.it", href: t("links.cv"), ...external },
  ];

  return (
    <Section id="contact" kicker={t("contact.kicker")} title={t("contact.title")}>
      <StyledGrid>
        <StyledText data-reveal>
          <p>{t("contact.text")}</p>
          <StyledEmail href={`mailto:${t("links.email")}`}>{t("links.email")}</StyledEmail>
        </StyledText>
        <StyledList data-reveal>
          {links.map(({ icon: Icon, label, value, ...props }) => (
            <li key={label}>
              <a {...props}>
                <Icon />
                {label}
                <span>{value}</span>
              </a>
            </li>
          ))}
        </StyledList>
      </StyledGrid>
    </Section>
  );
}
