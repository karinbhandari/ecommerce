import React, { ReactElement, useState } from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Layout from '../../src/modules/core/components/Layout';
import EmptyWishList from '../../src/modules/Checkout/WishList/EmptyWishList/EmptyWishList';

const WishListStyles = () =>
  createStyles({
    wishListWrap: {
      // border: '1px solid red',
      width: '100%',
      minHeight: 500,
      height: 'auto',
    },
  });

type WishListProp = WithStyles<typeof WishListStyles>;

const WishList = ({ classes }: WishListProp): ReactElement => {
  const [wishLists, setWishLists] = useState<Array<any>>([]);
  return (
    <Layout detailHeader={false} headerText={'WishList'}>
      <div className={classes.wishListWrap}>
        {wishLists.length > 0 ? <p>Whishlists are here</p> : <EmptyWishList />}
      </div>
    </Layout>
  );
};

export default withStyles(WishListStyles)(WishList);
