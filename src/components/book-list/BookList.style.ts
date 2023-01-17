import { styled } from "../../../stitches.config";

export const Container = styled("ul", {
  display: "flex",
  justifyContent: "space-between",
  padding: "4rem 1rem 1rem",

  li: {
    display: "flex",
    flexDirection: "column",
    position: "relative",

    span: {
      fontSize: "5rem",
      position: "absolute",
      top: -50,
      left: -20,
    },
  },
});
