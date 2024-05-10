import { PropsWithChildren } from "react";
import { TmplContainer } from "./Tmpl.styles";

export default function Tmpl({ children }: PropsWithChildren<{}>) {
  return <TmplContainer>{children}</TmplContainer>;
}
