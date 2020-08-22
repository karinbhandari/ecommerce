import React, { ReactElement } from 'react';
import { createStyles, Card, CardMedia, Typography, Theme, IconButton } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import utilities from '../../../../styles/utilities';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

const CartItemStyles = (theme: Theme) =>
  createStyles({
    cardItemWrap: {
      minWidth: 300,
      maxWidth: 400,
      width: '100%',
      height: 150,
      //   border: '1px solid red',
      ...utilities.rowFlex,
      margin: theme.spacing(0.5),
    },
    cardItemImage: {
      height: 150,
      width: 150,
      //   border: '1px solid red',
      ...utilities.rowFlexCenter,
    },
    cardItemDetails: {
      height: 150,
      width: 'calc(100% - 190px)',
      //   border: '1px solid red',
      ...utilities.columnFlex,
      justifyContent: 'space-around',
      padding: theme.spacing(0.5),
    },
    cardItemActions: {
      height: 150,
      width: 40,
      //   border: '1px solid red',
      ...utilities.columnFlex,
    },
    cardItemDetailsSizes: {},
    cardItemDetailsQty: {},
  });

type CartItemProp = {};

type CartItemStylesProp = CartItemProp & WithStyles<typeof CartItemStyles>;

const CartItem = ({ classes }: CartItemStylesProp): ReactElement => {
  return (
    <Card className={classes.cardItemWrap}>
      <CardMedia
        className={classes.cardItemImage}
        image="https://lsco.scene7.com/is/image/lsco/288330637-front-pdp?$grid_desktop_bottoms$"
        title="Product Image"
      />
      <div className={classes.cardItemDetails}>
        <Typography component="h1" variant="subtitle1">
          Demo Product
        </Typography>
        <Typography variant="subtitle2" component="h2" color="textSecondary">
          Demo product some desc
        </Typography>
        <Typography variant="body2" component="h2">
          Rs 500
        </Typography>
        <div className={classes.cardItemDetailsSizes}>
          <Typography variant="body2" component="h2">
            Size:
          </Typography>
        </div>
        <div className={classes.cardItemDetailsQty}>
          <Typography variant="body2" component="h2">
            Quanity:
          </Typography>
        </div>
      </div>
      <div className={classes.cardItemActions}>
        <IconButton>
          <ClearRoundedIcon />
        </IconButton>
        <IconButton>
          <FavoriteBorderRoundedIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default withStyles(CartItemStyles)(CartItem);
