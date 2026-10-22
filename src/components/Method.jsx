import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../styles";
import Section from "./Section";

const StyledIntro = styled.p`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.125rem);
  line-height: 1.3;
  max-width: 34ch;
  margin-bottom: 48px;
`;

const StyledSteps = styled.ol`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 16px;
  counter-reset: step;

  @media ${device.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  li {
    counter-increment: step;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 28px;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 20px;
  }

  li::before {
    content: counter(step, decimal-leading-zero);
    font-family: var(--font-display);
    font-size: 15px;
    color: var(--accent);
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    color: var(--muted);
  }
`;

const StyledOutcome = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 48px;

  @media ${device.desktop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 48px;
  }

  p:first-child {
    font-weight: 600;
    padding-left: 16px;
    border-left: 3px solid var(--accent);
  }

  p:last-child {
    color: var(--muted);
  }
`;

export default function Method() {
  const { t } = useTranslation();
  const steps = t("method.steps", { returnObjects: true });

  return (
    <Section id="method" kicker={t("method.kicker")} title={t("method.title")}>
      <StyledIntro data-reveal>{t("method.intro")}</StyledIntro>
      <StyledSteps data-reveal>
        {steps.map(({ title, text }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </StyledSteps>
      <StyledOutcome data-reveal>
        <p>{t("method.outcome")}</p>
        <p>{t("method.interest")}</p>
      </StyledOutcome>
    </Section>
  );
}
