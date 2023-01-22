import { createStitches, ScaleValue } from "@stitches/react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      primary: `#D73628`,
      primaryLight: `#FC4737`,
      primaryDark: `#AD1E12 `,

      background: `#2F2F33`,

      title: `#E1E1E6`,
      text: `#C4C4CC`,

      shape: `#29292E`,
      // Outros exemplos
      // placeholder: '',
      // support: '',
    },
    space: {
      "0": "0rem",
      "1": "0.0625rem",
      "4": "0.25rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "32": "2rem",
      "64": "4rem",
    },
    radii: {
      full: "6250rem",
      default: "0.3125rem",
    },
    fonts: {
      default: roboto.style.fontFamily,
    },
  },
  utils: {
    paddingX: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    maxSize: (value: ScaleValue<"space">) => ({
      maxHeight: value,
      maxWidth: value,
    }),
    minSize: (value: ScaleValue<"space">) => ({
      minHeight: value,
      minWidth: value,
    }),
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});
