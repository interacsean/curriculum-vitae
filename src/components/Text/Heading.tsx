import { ComponentProps } from "react";
import styled, { StyledInterface } from "styled-components";

interface Props {
  as: string;
  h: number;
  noMargin?: true;
  fontSize?: number | string;
}

const HeadingGeneric = styled.h2<Props>(({ h, theme, fontSize, noMargin }) => ({
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.medium,
  fontSize: typeof fontSize === 'number' ? theme.fontSize(fontSize)
    : typeof fontSize === 'string' ? fontSize
    : theme.fontSize(6 - h),
  color: theme.palette.dark[90],
  margin: noMargin ? 0 : undefined
}));

const Heading = ({
  h,
  as,
  ...props
}: ComponentProps<typeof HeadingGeneric>) => (
  <HeadingGeneric as={as || `h${h || 3}`} h={h} {...props} />
);

export default Heading;
