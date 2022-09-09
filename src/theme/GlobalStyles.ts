import { createGlobalStyle } from "styled-components";

import typography from "./typography";

export default createGlobalStyle({
  html: {
    fontSize: "16px",
    fontFamily: typography.fontFamily.content
  },
  body: {
    margin: 0,
    padding: 0
  },
  "*": {
    boxSizing: "border-box"
  }
});
