import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Container } from "./Section";

const StyledFooter = styled.footer`
  border-top: 1px solid var(--line);
  padding: 32px 0;
  color: var(--muted);
  font-size: 14px;
`;

const StyledRow = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;

  a:hover {
    color: var(--text);
  }
`;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <StyledRow>
        <p>
          © {__BUILD_YEAR__} Salvatore Emilio · {t("footer.made")}
        </p>
        <a href="https://github.com/salvatore-081/portfolio" target="_blank" rel="noopener noreferrer">
          {t("footer.source")}
        </a>
      </StyledRow>
    </StyledFooter>
  );
}
