import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../styles";
import { Container, Kicker } from "./Section";
import { ArrowIcon, DownloadIcon, MailIcon } from "./Icons";
import me from "../assets/images/me.jpg";

const StyledHero = styled.section`
  padding: 48px 0 72px;

  @media ${device.desktop} {
    padding: 96px 0 112px;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  gap: 32px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: minmax(0, 1fr) 220px;
  }

  @media ${device.desktop} {
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 64px;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledH1 = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: clamp(2.25rem, 6.5vw, 4.25rem);
  font-weight: 450;
  line-height: 1.04;

  .role span {
    display: block;
  }
`;

const StyledClaim = styled.p`
  font-family: var(--font-display);
  font-size: clamp(1.375rem, 2.6vw, 1.875rem);
  line-height: 1.3;
  max-width: 30ch;
`;

const StyledLead = styled.p`
  color: var(--muted);
  max-width: 56ch;
`;

const StyledActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 999px;
  border: 1px solid ${({ $primary }) => ($primary ? "var(--accent)" : "var(--line-strong)")};
  background: ${({ $primary }) => ($primary ? "var(--accent)" : "transparent")};
  color: ${({ $primary }) => ($primary ? "var(--accent-contrast)" : "var(--text)")};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${({ $primary }) => ($primary ? "var(--accent)" : "var(--text)")};
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-1px);
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const StyledPhoto = styled.img`
  grid-row: 1;
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid var(--line);

  @media ${device.tablet} {
    grid-row: auto;
    grid-column: 2;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    border-radius: 24px;
  }
`;

const StyledStats = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px 24px;
  margin: 64px 0 0;

  @media ${device.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 96px;
  }

  div {
    display: flex;
    flex-direction: column-reverse;
    gap: 8px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
  }

  dt {
    color: var(--muted);
    font-size: 15px;
    line-height: 1.4;
  }

  dd {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 5vw, 3.25rem);
    line-height: 1;
  }
`;

export default function Hero() {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true });

  return (
    <StyledHero id="top" aria-labelledby="hero-title">
      <Container>
        <StyledGrid>
          <StyledText>
            <StyledH1 id="hero-title">
              <Kicker as="span">{t("hero.name")}</Kicker>{" "}
              <span className="role">
                {t("hero.role")
                  .split(" · ")
                  .map((part, i, all) => (
                    <span key={part}>
                      {part}
                      {i < all.length - 1 && " "}
                    </span>
                  ))}
              </span>
            </StyledH1>
            <StyledClaim>{t("hero.claim")}</StyledClaim>
            <StyledLead>{t("hero.text")}</StyledLead>
            <StyledActions>
              <Button $primary href={`mailto:${t("links.email")}`}>
                <MailIcon />
                {t("hero.write")}
              </Button>
              <Button href={t("links.linkedin")} target="_blank" rel="noopener noreferrer">
                {t("hero.linkedin")}
                <ArrowIcon />
              </Button>
              <Button href={t("links.cv")} target="_blank" rel="noopener noreferrer">
                <DownloadIcon />
                {t("hero.cv")}
              </Button>
            </StyledActions>
          </StyledText>
          <StyledPhoto src={me} alt={t("hero.photoAlt")} width="800" height="800" fetchPriority="high" />
        </StyledGrid>
        <StyledStats>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </StyledStats>
      </Container>
    </StyledHero>
  );
}
