import React, { ReactElement, useState, Dispatch, useEffect } from 'react';
import { NextPage } from 'next';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import Layout from '../../src/modules/core/components/Layout';
import ProductCard from '../../src/modules/core/components/Product/ProductCard/ProductCard';
import utilities from '../../src/styles/utilities';
import {
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Theme,
  ButtonBase,
} from '@material-ui/core';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import Filters from '../../src/modules/core/components/Filters/Filters';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../src/redux/product/product.actions';
import { AppActions } from '../../src/redux/types';

const ProductsStyles = (theme: Theme) =>
  createStyles({
    productsWrap: {
      width: '100%',
      height: '320px',
      ...utilities.columnFlex,
    },
    productsBreadcrums: {
      width: '100%',
      height: '320px',
      padding: theme.spacing(1.5),
      ...utilities.rowFlexCenter,
    },
    productsTitle: {
      width: '100%',
      height: 'auto',
      padding: theme.spacing(1),
      ...utilities.rowFlexCenter,
    },
    productsFilters: {
      width: '100%',
      // height: '320px',
      marginTop: theme.spacing(1),
      border: `1px solid ${theme.palette.grey[100]}`,
      ...utilities.rowFlex,
    },
    productsFiltersLeft: {
      flex: 1,
      ...utilities.rowFlexCenter,
      borderRight: `1px solid ${theme.palette.grey[100]}`,
    },
    productsFiltersRight: {
      height: '46',
      flex: 1,
      ...utilities.rowFlexCenter,
    },
    productsBody: {
      width: '100%',
      height: 'auto',
      // ...utilities.rowFlex,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // justifyContent: 'center',
      // border: '1px solid red',
    },
  });

type ProductStylesT = WithStyles<typeof ProductsStyles>;

const Products: NextPage<ProductStylesT> = ({ classes }: ProductStylesT): ReactElement => {
  const dispatch: Dispatch<AppActions> = useDispatch();

  const [toogleFilter, setToggleFilter] = useState<boolean>(false);
  const toogleFilterHandler = (): void => {
    setToggleFilter((prevState) => !prevState);
  };
  useEffect(() => {
    dispatch(
      searchProducts({ something: 'something', api_key: 'Ydn0CIuq4U680KrU0ct9mG2cMYpwEpTw' })
    );
  }, []);
  // console.log()
  return (
    <Layout>
      <div className={classes.productsWrap}>
        <div className={classes.productsBreadcrums}>
          <Typography variant="body1" component="p">
            Clothing
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            / Men / Jeans
          </Typography>
        </div>
        <div className={classes.productsTitle}>
          <Typography variant="h6" component="h1">
            MEN'S JEANS & DENIM PANTS
          </Typography>
        </div>
        <div className={classes.productsFilters}>
          <ButtonBase focusRipple className={classes.productsFiltersLeft}>
            <Typography variant="body2" component="p">
              RECOMMENDED
            </Typography>
          </ButtonBase>
          <ButtonBase className={classes.productsFiltersRight} onClick={toogleFilterHandler}>
            <IconButton>
              <TuneRoundedIcon />
            </IconButton>
            <Typography variant="body2" component="p">
              FILTER
            </Typography>
          </ButtonBase>
        </div>
        <div className={classes.productsBody}>
          <Filters toogleFilter={toogleFilter} />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Layout>
  );
};

export default withStyles(ProductsStyles)(Products);
