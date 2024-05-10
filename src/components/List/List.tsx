import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ListProps {
  ordered?: true
}

const Ol = styled.ol(({theme}) => ({
  paddingInlineStart: theme.space(3)
}));

const List = ({ ordered, children }: PropsWithChildren<ListProps>) => ordered
  ? (<Ol>{children}</Ol>)
  : (<Ol as='ul'>{children}</Ol>);

export default List;

export const ListItem = styled.li(({ theme }) => ({
  fontWeight: theme.fontWeight.light
}));
