import { styled } from "../../../stitches.config";

export const List = styled("ul", {
  display: "flex",
  gap: "$32",
  overflowX: 'scroll',

  li: {
    display: "flex",
    flexDirection: "column",
    position: "relative",

    span: {
      fontSize: "5rem",
      position: "absolute",
      top: -45,
      left: -20,
    },
  },

  variants: {
    type: {
      default: {
        padding: '$0',
      },
      ranked: {
        paddingY: '$32',
        paddingLeft: '$20',
      }
    }
  }
});
