import { createStitches, globalCss } from "@stitches/react";

const { styled, css } = createStitches({
  theme: {
    colors: {
      black: "#16161D",
      white: "#FDFDFD",
      grayDark: "#303036",
      grayLight: "#b9b9ba",
    },
    space: {
      1: "0.4rem",
      2: "0.8rem",
			"2_5": "1.2rem",
      3: "1.6rem",
      4: "2.4rem",
      5: "3.2rem",
    },
    fontSizes: {
      1: "1.2rem",
      2: "1.8rem",
      3: "2.4rem",
      4: "3.2rem",
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif",
    },
  },
});

const globalStyles = globalCss({
  "*": {
    verticalAlign: "baseline",
    fontWeight: "inherit",
    fontStyle: "inherit",
    fontSize: "100%",
    border: "0 none",
    outline: 0,
    padding: 0,
    margin: 0,
    fontFamily: "$sans",
    boxSizing: "border-box",
  },
  html: {
    textSizeAdjust: "none",
    overscrollBehavior: "none",
    fontSize: "62.5%",
  },
  body: {
    backgroundColor: "$black",
    color: "white",
    overscrollBehavior: "none",
  },
  button: {
    cursor: "pointer",
  },
  ul: {
    listStyle: "none",
  },
  a: {
    textDecoration: "none",
    color: "$colors$white",
  },
});

export { styled, css, globalStyles };
