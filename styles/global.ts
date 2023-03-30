import { globalCss } from "@/stitches";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`,
  },
  "body, button": {
    fontFamily: `$default`,
  },
  body: {
    background: `$background`,
    color: `$text`,
  },
  "h1, h2, h3, h4, h5, h6": {
    color: `$title`,
  },
  ul: {
    listStyle: "none",
  },
  ".app-container": {
    margin: "auto",
    maxWidth: "70rem",
    padding: "1rem",
  },
  ".u-hide-scrollbar::-webkit-scrollbar, .u-hide-scrollbar::-webkit-scrollbar":
    {
      display: "none",
      scrollbarWidth: "none",
    },
});
