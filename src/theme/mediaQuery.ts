import breakpoint from "./breakpoint";

export function max(max: breakpoint) {
  return `@media (max-width: ${max - 1}px)`;
}

export function min(min: breakpoint) {
  return `@media (min-width: ${min}px)`;
}

export function range(min: breakpoint, max: breakpoint) {
  return `@media (min-width: ${min}px) and (max-width: ${max - 1})px`;
}

export default {
  min,
  max,
  range
};
