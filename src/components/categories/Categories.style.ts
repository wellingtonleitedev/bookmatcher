import { styled } from '../../../stitches.config'

export const List = styled("ul", {
  display: "flex",
  gap: "$16",
  justifyContent: 'space-between',
  paddingY: "$16",
  overflow: "scroll",

  li: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "$4",
    minWidth: "$space$64",

    figure: {
      backgroundColor: "$text",
      borderRadius: "$full",
      maxSize: "3rem",
      padding: "$8",

      img: {
        maxSize: "100%",
      },
    },

    figcaption: {
      fontSize: "$space$12",
      whiteSpace: "nowrap",
    },
  },
});