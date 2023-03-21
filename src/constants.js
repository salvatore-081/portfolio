import { css } from "styled-components";

export const ScrollRevealConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: "bottom",
  distance: "20px",
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

export const device = {
  desktop: "(min-width: 768px)",
};

export function aHoverAnimation(bottom) {
  return css`
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: ${bottom};
      left: 0;
      background-color: var(--secondary-color);
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      color: var(--secondary-color);
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `;
}
