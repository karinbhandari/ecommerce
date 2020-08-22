import React, { ReactElement, Dispatch, useState } from 'react';
import { createStyles, WithStyles, Theme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import {
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Box,
} from '@material-ui/core';
import utilities from '../../../../../styles/utilities';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Link from 'next/link';
import { RouteType } from 'next/dist/lib/load-custom-routes';
import { useRouter, NextRouter } from 'next/router';
import theme from '../../../../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, AppStateType } from '../../../../../redux/types';
import { addToCart } from '../../../../../redux/profile/profile.actions';
import { Selector } from 'reselect';
import { getAddToCartErr } from '../../../../../redux/profile/profile.selectors';

const ProductCardStyles = (theme: Theme) =>
  createStyles({
    root: {
      height: 'auto',
      width: '50%',
      padding: theme.spacing(1),
    },
    productWrap: {
      height: 'auto',
      width: '100%',
    },
    productCardImages: {
      width: '100%',
      height: 200,
      // border: '1px solid green',
    },
    productCardTitle: {
      width: '100%',
      height: 25,
      padding: theme.spacing(0, 0.5),
      '& > p': {
        ...utilities.productTitle,
      },
      // border: '1px solid green',
    },
    productCardPrice: {
      padding: theme.spacing(0, 0.5),
      width: '100%',
      height: 25,
      '& > p': {
        ...utilities.productPrice,
      },
      // border: '1px solid red',
    },
    productCardDesc: {
      padding: theme.spacing(0.5, 1, 0.5, 1),
      '& > p': {
        ...utilities.productDesc,
      },
      // border: '1px solid red',
    },
    productCardActions: {
      width: '100%',
      height: 40,
      '& > div': {
        width: '50%',
        height: 40,
        ...utilities.rowFlexCenter,
      },
      // border: '1px solid red',
    },
  });

type ProductCardProps = {
  productDetail?: any;
  index?: number;
};

type ProductCardStylesProps = ProductCardProps & WithStyles<typeof ProductCardStyles>;

const ProductCard = ({ classes, productDetail, index }: ProductCardStylesProps): ReactElement => {
  const router: NextRouter = useRouter();

  const [productDetails, setProductDetails] = useState<any>({
    productTitle: productDetail?.product_title || 'Nautica',
    productDesc: productDetail?.product_desc || 'Printed Polo Color TShirt',
    productPrice: productDetail?.product_price || '500',
    productImage:
      productDetail?.images?.[0] ||
      'https://lsco.scene7.com/is/image/lsco/288330637-front-pdp?$grid_desktop_bottoms$',
    productUrl: productDetail?.product_url || 'demo-product',
  });
  // const getAddToCartError: string = useSelector(getAddToCartErr);
  const dispatch: Dispatch<AppActions> = useDispatch();
  const addToCartHandler = () => {
    const dummyProductObj = {
      pName: 'Hattie K Voops',
      pDesc:
        'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
      pSize: 'XL',
      pQty: '1',
      pPrice: '500',
    };
    dispatch(addToCart(dummyProductObj));
  };
  return (
    <div className={classes.root} key={index}>
      <Card className={classes.productWrap}>
        <Link href="/products/[product-detail]" as={`/products/${productDetails?.productUrl}`}>
          <CardMedia
            className={classes.productCardImages}
            image={productDetails?.productImage}
            // image="https://lsco.scene7.com/is/image/lsco/288330637-front-pdp?$grid_desktop_bottoms$"
            title="product"
          />
        </Link>
        <CardContent className={classes.productCardDesc}>
          <Typography variant="body1" noWrap component="p">
            {productDetails?.productTitle}
          </Typography>
          <Typography variant="body2" noWrap color="textSecondary" component="p">
            {productDetails?.productDesc?.split('<p>')}
          </Typography>
          <Typography variant="body1" component="p">
            {`Rs. ${productDetails?.productPrice}`}
          </Typography>
        </CardContent>
        <CardActions className={classes.productCardActions}>
          <div>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </div>
          {/* <IconButton aria-label="quick view">
            <VisibilityIcon />
          </IconButton> */}
          <div>
            <IconButton aria-label="add to bag" onClick={addToCartHandler}>
              <LocalMallOutlinedIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(ProductCardStyles)(ProductCard);
