import React, { ReactElement } from 'react';
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
      // border: '1px solid red',
    },
  });

type ProductCardProps = {};

type ProductCardStylesProps = ProductCardProps & WithStyles<typeof ProductCardStyles>;

const ProductCard = ({ classes }: ProductCardStylesProps): ReactElement => {
  const router: NextRouter = useRouter();
  return (
    <div className={classes.root}>
      <Card className={classes.productWrap}>
        <Link href="/products/[product-detail]" as="/products/demo-product">
          <CardMedia
            className={classes.productCardImages}
            image="https://lsco.scene7.com/is/image/lsco/288330637-front-pdp?$grid_desktop_bottoms$"
            title="product"
          />
        </Link>
        <CardActions className={classes.productCardActions}>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <VisibilityIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <LocalMallOutlinedIcon />
          </IconButton>
        </CardActions>
        <CardContent className={classes.productCardDesc}>
          <Typography variant="body1" component="p">
            Nautica
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Printed Polo Color TShirt
          </Typography>
          <Typography variant="body1" component="p">
            Rs 1000
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(ProductCardStyles)(ProductCard);
