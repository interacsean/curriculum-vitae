import styled from "styled-components";

export const ColumnWrap = styled.div(({ theme }) => ({
  [theme.mediaQuery.min(theme.breakpoint.Tablet)]: {
    display: "flex"
  },
  columnGap: "1rem"
}));

export const SidePanel = styled.aside(({ theme }) => ({
  flexBasis: `${(4 / 12) * 100}%`,
  [theme.mediaQuery.min(theme.breakpoint.Tablet)]: {
    maxWidth: "13rem"
  },
  flexShrink: 1
}));

export const MainPanel = styled.main({
  flexBasis: `${(8 / 12) * 100}%`,
  flexGrow: 1
});
