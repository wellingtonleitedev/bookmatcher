import {styled} from '../../../stitches.config'

export const List = styled("ul", {
  display: "flex",
  justifyContent: 'space-between',
  paddingY: '$16',

  li: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4'
  }
});