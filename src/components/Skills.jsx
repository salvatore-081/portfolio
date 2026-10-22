import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../styles";
import Section from "./Section";

const StyledGroups = styled.div`
  display: grid;
  gap: 40px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 48px;
  }

  h3 {
    font-size: 1.375rem;
    margin-bottom: 16px;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    padding: 4px 12px;
    border: 1px solid var(--line-strong);
    border-radius: 999px;
    font-size: 14px;
    color: var(--muted);
  }
`;

const StyledEducation = styled.p`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  color: var(--muted);

  strong {
    color: var(--text);
    margin-right: 8px;
  }
`;

export default function Skills() {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true });

  return (
    <Section id="skills" kicker={t("skills.kicker")} title={t("skills.title")}>
      <StyledGroups>
        {groups.map(({ title, items }) => (
          <div key={title} data-reveal>
            <h3>{title}</h3>
            <Tags>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Tags>
          </div>
        ))}
      </StyledGroups>
      <StyledEducation data-reveal>
        <strong>{t("skills.educationTitle")}</strong>
        {t("skills.education")}
      </StyledEducation>
    </Section>
  );
}
