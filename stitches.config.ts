import {
  grayDark,
  sky,
  green,
  yellow,
  red,
  blue,
} from "@radix-ui/colors";

import { createStitches, ScaleValue } from "@stitches/react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      primary: sky.sky3,
      primaryLight: sky.sky4,
      primaryDark: sky.sky9,
      active: sky.sky5,
      border: sky.sky6,
      borderLight: sky.sky8,

      background: grayDark.gray2,
      title: grayDark.gray12,
      text: grayDark.gray11,

      success: green.green1,
      warning: yellow.yellow1,
      danger: red.red1,
      info: blue.blue1,
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
