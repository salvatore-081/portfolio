import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../styles";
import Section from "./Section";

const StyledJob = styled.article`
  display: grid;
  gap: 16px;
  padding: 32px 0;
  border-top: 1px solid var(--line);

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  @media ${device.desktop} {
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 48px;
  }
`;

const StyledCompany = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 1.75rem;
  }

  h3 a {
    text-decoration: none;
  }

  h3 a:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }

  p {
    color: var(--muted);
    font-size: 15px;
  }
`;

const StyledRoles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const StyledRole = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 12px;
  }

  h4 {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
  }

  header p {
    color: var(--muted);
    font-size: 15px;
    font-variant-numeric: tabular-nums;
  }

  > p,
  dd {
    color: var(--muted);
    max-width: 68ch;
  }

  dl {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  dt {
    font-weight: 600;
    margin-bottom: 4px;
  }

  dd {
    margin: 0;
  }
`;

export default function Experience() {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true });

  return (
    <Section id="experience" kicker={t("experience.kicker")} title={t("experience.title")}>
      {jobs.map((job) => (
        <StyledJob key={job.company} data-reveal>
          <StyledCompany>
            <h3>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                {job.company}
              </a>
            </h3>
            <p>{job.dates}</p>
            <p>{job.place}</p>
          </StyledCompany>
          <StyledRoles>
            {job.roles.map((role) => (
              <StyledRole key={role.title}>
                <header>
                  <h4>{role.title}</h4>
                  <p>{role.dates}</p>
                </header>
                {role.text && <p>{role.text}</p>}
                {role.blocks && (
                  <dl>
                    {role.blocks.map(({ label, text }) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{text}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </StyledRole>
            ))}
          </StyledRoles>
        </StyledJob>
      ))}
    </Section>
  );
}
