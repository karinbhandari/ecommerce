import { createStyles } from "@material-ui/core/styles"

const utilities = createStyles({
  productTitle: {
    fontSize: '14px !important',
    fontWeight: 600
  },
  productPrice: {
    fontSize: '14px !important',
    fontWeight: 600
  },
  productDesc: {
    fontSize: '12px !important',
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  // rowFlexStart: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start'
  // },
  rowFlexStartCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rowFlexEndCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowFlexCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnFlexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default utilities
