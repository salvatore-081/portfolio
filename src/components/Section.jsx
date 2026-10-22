import styled from "styled-components";
import { device } from "../styles";

export const Container = styled.div`
  width: 100%;
  max-width: calc(var(--max-width) + 2 * var(--gutter));
  margin: 0 auto;
  padding: 0 var(--gutter);
`;

const StyledSection = styled.section`
  padding: 72px 0;
  border-top: 1px solid var(--line);

  @media ${device.desktop} {
    padding: 112px 0;
  }
`;

const StyledHeading = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;

  @media ${device.desktop} {
    margin-bottom: 56px;
  }
`;

export const Kicker = styled.p`
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
`;

const StyledTitle = styled.h2`
  font-size: clamp(2rem, 4.5vw, 3rem);
`;

export default function Section({ id, kicker, title, children }) {
  return (
    <StyledSection id={id} aria-labelledby={`${id}-title`}>
      <Container>
        <StyledHeading data-reveal>
          <Kicker>{kicker}</Kicker>
          <StyledTitle id={`${id}-title`}>{title}</StyledTitle>
        </StyledHeading>
        {children}
      </Container>
    </StyledSection>
  );
}
