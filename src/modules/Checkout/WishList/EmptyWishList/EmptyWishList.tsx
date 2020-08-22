import React, { ReactElement } from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import utilities from '../../../../styles/utilities';

const EmptyWishListStyles = () =>
  createStyles({
    emptyWishListWrap: {
      //   border: '1px solid red',
      width: '100%',
      minHeight: 500,
      height: 'auto',
    },
    emptyWishListImage: {
      width: '100%',
      height: 400,
      ...utilities.rowFlexCenter,
      '& > img': {
        height: '100%',
        width: 'auto',
      },
      //   border: '1px solid red',
    },
    emptyWishListDesc: {
      width: '100%',
      //   border: '1px solid red',
      ...utilities.columnFlexCenter,
    },
    emptyWishListAction: {
      width: '100%',
      height: 100,
      //   border: '1px solid red',
      ...utilities.rowFlexCenter,
    },
  });

type EmptyWishListProp = WithStyles<typeof EmptyWishListStyles>;

const EmptyWishList = ({ classes }: EmptyWishListProp): ReactElement => {
  return (
    <div className={classes.emptyWishListWrap}>
      <div className={classes.emptyWishListImage}>
        <img src="/static/no_wishlist.png" alt="no wishlist" title="no wishlist" />
      </div>
      <div className={classes.emptyWishListDesc}>
        <Typography variant="h5" component="p">
          NO ITEM IN YOUR
        </Typography>
        <Typography variant="h5" component="p">
          WHISHLIST
        </Typography>
      </div>
      <div className={classes.emptyWishListAction}>
        <Button variant="contained" color="primary">
          CONTINUE SHOPPING
        </Button>
      </div>
    </div>
  );
};

export default withStyles(EmptyWishListStyles)(EmptyWishList);
