import React, { ReactElement, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    wishListWrap: {
      // border: '1px solid red',
      width: '100%',
      minHeight: 500,
      height: 'auto',
    },
  })
);

const ShippingBillingAddress = (): ReactElement => {
  const classes = useStyles();
  return (
    <div>
      <p>Billing Shiiping Detals</p>
    </div>
  );
};

export default ShippingBillingAddress;
