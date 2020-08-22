import React, { ReactElement } from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import utilities from '../../../../styles/utilities';

const EmptyCartStyles = () =>
  createStyles({
    emptyCartWrap: {
      //   border: '1px solid red',
      width: '100%',
      minHeight: 500,
      height: 'auto',
    },
    emptyCartImage: {
      width: '100%',
      height: 400,
      ...utilities.rowFlexCenter,
      '& > img': {
        height: '100%',
        width: 'auto',
      },
      //   border: '1px solid red',
    },
    emptyCartDesc: {
      width: '100%',
      //   border: '1px solid red',
      ...utilities.columnFlexCenter,
    },
    emptyWCartAction: {
      width: '100%',
      height: 100,
      //   border: '1px solid red',
      ...utilities.rowFlexCenter,
    },
  });

type EmptyCartProp = WithStyles<typeof EmptyCartStyles>;

const EmptyCart = ({ classes }: EmptyCartProp): ReactElement => {
  return (
    <div className={classes.emptyCartWrap}>
      <div className={classes.emptyCartImage}>
        <img src="/static/no_cart.png" alt="no wishlist" title="no wishlist" />
      </div>
      <div className={classes.emptyCartDesc}>
        <Typography variant="h5" component="p">
          OOPS, YOUR CART LOOKS
        </Typography>
        <Typography variant="h5" component="p">
          EMPTY
        </Typography>
      </div>
      <div className={classes.emptyWCartAction}>
        <Button variant="contained" color="primary">
          CONTINUE SHOPPING
        </Button>
      </div>
    </div>
  );
};

export default withStyles(EmptyCartStyles)(EmptyCart);
