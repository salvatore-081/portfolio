import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../styles";
import Section from "./Section";
import { Tags } from "./Skills";

const StyledIntro = styled.p`
  color: var(--muted);
  max-width: 60ch;
  margin-bottom: 40px;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledCard = styled.article`
  display: grid;
  gap: 24px;
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 24px;

  @media ${device.desktop} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 56px;
    padding: 40px;
  }
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  h3 {
    font-size: clamp(1.625rem, 3vw, 2.125rem);
  }

  p {
    color: var(--muted);
  }

  ${Tags} {
    margin-top: 8px;
  }
`;

const StyledStatus = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
  }
`;

const StyledHighlights = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;

  @media ${device.desktop} {
    padding-top: 48px;
  }

  li {
    position: relative;
    padding-left: 24px;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.75em;
    width: 12px;
    height: 2px;
    background: var(--accent);
  }
`;

export default function Projects() {
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true });

  return (
    <Section id="projects" kicker={t("projects.kicker")} title={t("projects.title")}>
      <StyledIntro data-reveal>{t("projects.intro")}</StyledIntro>
      <StyledList>
        {items.map(({ name, status, text, highlights, tags }) => (
          <StyledCard key={name} data-reveal>
            <StyledMain>
              <StyledStatus>{status}</StyledStatus>
              <h3>{name}</h3>
              <p>{text}</p>
              <Tags>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </Tags>
            </StyledMain>
            {highlights && (
              <StyledHighlights>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </StyledHighlights>
            )}
          </StyledCard>
        ))}
      </StyledList>
    </Section>
  );
}
