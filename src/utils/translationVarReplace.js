import reactStringReplace from "react-string-replace";

export function translationVarReplace(
  text,
  vars,
  component,
  prefersReducedMotion
) {
  const REGEX = /\${([0-9]+)}/g;

  const Component = component;

  return reactStringReplace(text, REGEX, (m, i) => {
    return (
      <Component
        $prefersReducedMotion={prefersReducedMotion}
        key={i}
        href={vars[`\${${m}}`].url}
      >
        {vars[`\${${m}}`].label}
      </Component>
    );
  });
}
