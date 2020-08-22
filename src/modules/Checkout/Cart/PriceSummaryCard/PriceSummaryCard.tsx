import React, { ReactElement } from 'react';
import {
  createStyles,
  Card,
  CardMedia,
  Typography,
  Theme,
  List,
  ListSubheader,
  ListItem,
} from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import utilities from '../../../../styles/utilities';

const PriceSummaryCardStyles = (theme: Theme) =>
  createStyles({
    priceSummaryWrap: {
      //   border: '1px solid red',
    },
    priceSummaryList: {
      ...utilities.columnFlex,
    },
    priceSummaryTitle: {
      height: 30,
      width: '100%',
      borderBottom: `1px solid ${theme.palette.grey[50]}`,
      //   ...utilities.rowStartCenter,
      margin: theme.spacing(0.5, 0),
    },
    priceSummaryDetails: {
      height: 25,
      width: '100%',
      margin: theme.spacing(0.5, 0),
      ...utilities.rowFlexSpaceBetween,
      //   border: '1px solid red',
    },
    priceSummaryTotal: {
      height: 30,
      width: '100%',
      borderTop: `1px solid ${theme.palette.grey[50]}`,
      //   ...utilities.rowStartCenter,
      margin: theme.spacing(0.5, 0),
      ...utilities.rowFlexSpaceBetween,
    },
  });

type PriceSummaryCardProp = {};

type PriceSummaryCardStylesProps = PriceSummaryCardProp & WithStyles<typeof PriceSummaryCardStyles>;

const PriceSummaryCard = ({ classes }: PriceSummaryCardStylesProps): ReactElement => {
  return (
    <Card className={classes.priceSummaryWrap}>
      <List className={classes.priceSummaryList}>
        <ListItem className={classes.priceSummaryTitle}>
          <Typography variant="subtitle1" component="p">
            PRICE DETAIL(3 Items)
          </Typography>
        </ListItem>
        <ListItem className={classes.priceSummaryDetails}>
          <Typography variant="body2" component="p">
            Bag Total
          </Typography>
          <Typography variant="body2" component="p">
            Rs 2000
          </Typography>
        </ListItem>
        <ListItem className={classes.priceSummaryDetails}>
          <Typography variant="body2" component="p">
            Bag Discount
          </Typography>
          <Typography variant="body2" component="p">
            Rs 2000
          </Typography>
        </ListItem>
        <ListItem className={classes.priceSummaryDetails}>
          <Typography variant="body2" component="p">
            Coupon Discount
          </Typography>
          <Typography variant="body2" component="p">
            Rs 2000
          </Typography>
        </ListItem>
        <ListItem className={classes.priceSummaryDetails}>
          <Typography variant="body2" component="p">
            Shipping Charges
          </Typography>
          <Typography variant="body2" component="p">
            FREE
          </Typography>
        </ListItem>
        <ListItem className={classes.priceSummaryDetails}>
          <Typography variant="body2" component="p">
            Application Tax and Charges
          </Typography>
          <Typography variant="body2" component="p">
            FREE
          </Typography>
        </ListItem>
        <ListItem className={classes.priceSummaryTotal}>
          <Typography variant="subtitle1" component="p">
            Total
          </Typography>
          <Typography variant="body2" component="p">
            Rs 2000
          </Typography>
        </ListItem>
      </List>
    </Card>
  );
};

export default withStyles(PriceSummaryCardStyles)(PriceSummaryCard);
