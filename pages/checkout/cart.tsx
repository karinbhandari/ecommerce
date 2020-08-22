import React, { ReactElement, useState } from 'react';
import Layout from '../../src/modules/core/components/Layout';
import classes from '*.module.css';
import { createStyles, Theme } from '@material-ui/core/styles';
import { WithStyles, withStyles } from '@material-ui/styles';
import utilities from '../../src/styles/utilities';
import CartItem from '../../src/modules/core/components/CartItem/CartItem';
import { Button } from '@material-ui/core';
import PriceSummaryCard from '../../src/modules/Checkout/Cart/PriceSummaryCard/PriceSummaryCard';
import EmptyCart from '../../src/modules/Checkout/Cart/EmptyCart/EmptyCart';

const CartStyles = (theme: Theme) =>
  createStyles({
    cartWrap: {
      // border: '1px solid red',
      width: '100%',
      minHeight: 400,
      ...utilities.columnFlex,
      padding: theme.spacing(0.5, 0, 5, 0),
    },
    cartItemList: {
      width: '100%',
      // border: '1px solid red',
      height: 'auto',
      ...utilities.columnFlexCenter,
    },
    addFromWhishList: {
      width: '100%',
      // border: '1px solid red',
      minHeight: 100,
    },
    applyCoupons: {
      width: '100%',
      // border: '1px solid red',
      minHeight: 100,
    },
    primarySummary: {
      width: '100%',
      // border: '1px solid red',
      height: 'auto',
      padding: theme.spacing(0.5),
    },
    primaryActions: {
      width: '100%',
      ...utilities.rowFlexCenter,
    },
  });

type CartStylesT = WithStyles<typeof CartStyles>;

const Cart = ({ classes }: CartStylesT): ReactElement => {
  const [cartLists, setCartLists] = useState<Array<any>>([]);
  return (
    <Layout detailHeader={true} headerText={'Shopping Bag'}>
      <div className={classes.cartWrap}>
        {cartLists.length > 0 ? (
          <>
            <div className={classes.cartItemList}>
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className={classes.addFromWhishList}></div>
            <div className={classes.applyCoupons}>{/* cart Item */}</div>
            <div className={classes.primaryActions}>
              <Button variant="contained" color="primary">
                Place Order
              </Button>
            </div>
            <div className={classes.primarySummary}>
              <PriceSummaryCard />
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </Layout>
  );
};

export default withStyles(CartStyles)(Cart);
