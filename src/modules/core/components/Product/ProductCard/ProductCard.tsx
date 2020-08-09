import React, { ReactElement } from 'react'
import { createStyles, WithStyles, Theme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/styles'
import { Typography, IconButton } from '@material-ui/core'
import utilities from '../../../../../styles/utilities'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Link from 'next/link'
import { RouteType } from 'next/dist/lib/load-custom-routes'
import { useRouter, NextRouter } from 'next/router'

const ProductCardStyles = (theme: Theme) =>
  createStyles({
    productCardWrap: {
      border: `1px solid ${theme.palette.grey[50]}`,
      height: '100% !important',
      width: '100%',
      margin: theme.spacing(1, 0.5),
      borderRadius: theme.spacing(0.2),
      padding: theme.spacing(0, 0, 0.5, 0),
    },
    productCardImages: {
      width: '100%',
      height: 'auto',
      '& > img': {
        width: '100% !important',
        height: 'auto',
        // border: '1px solid red',
      },
    },
    productCardTitle: {
      width: '100%',
      height: 'auto',
      padding: theme.spacing(0, 0.5),
      '& > p': {
        ...utilities.productTitle,
      },
      // border: '1px solid red'
    },
    productCardPrice: {
      padding: theme.spacing(0, 0.5),
      width: '100%',
      height: 'auto',
      '& > p': {
        ...utilities.productPrice,
      },
      // border: '1px solid red'
    },
    productCardDesc: {
      width: '100%',
      height: 'auto',
      padding: theme.spacing(0, 0.5),
      minHeight: 20,
      '& > p': {
        ...utilities.productDesc,
      },
      // border: '1px solid red'
    },
    productCardActions: {
      width: '100%',
      height: 'auto',
      // border: '1px solid red',
      ...utilities.rowFlex,
      '& > div': {
        width: '33.33%',
        height: '100%',
        // border: '1px solid red',
        ...utilities.rowFlexCenter,
        '& > button': {
          // border: '1px solid red',
          '& > span': {
            '& > svg': {
              fontSize: '20px !important',
              // border: '1px solid red !important'
            },
          },
        },
      },
    },
  })

type ProductCardProps = {}

type ProductCardStylesProps = ProductCardProps & WithStyles<typeof ProductCardStyles>

const ProductCard = ({ classes }: ProductCardStylesProps): ReactElement => {
  const router: NextRouter = useRouter()
  return (
    <div className={classes.productCardWrap}>
      <div
        role="image"
        onClick={() => {
          router.push('product/[product-detail]', 'product/demo-product')
        }}
        className={classes.productCardImages}
      >
        <img
          src="https://lsco.scene7.com/is/image/lsco/288330637-front-pdp?$grid_desktop_bottoms$"
          alt="product"
        />
      </div>
      <div className={classes.productCardActions}>
        <div>
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <VisibilityIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <LocalMallOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.productCardTitle}>
        <Typography component="p" variant="body1">
          Nautica
        </Typography>
      </div>
      <div className={classes.productCardDesc}>
        <Typography component="p" variant="body1">
          Printed Polo Color TShirt
        </Typography>
      </div>
      <div className={classes.productCardPrice}>
        <Typography component="p" variant="body1">
          Rs 1000
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(ProductCardStyles)(ProductCard)
