import React, { useState, ReactElement, useEffect } from 'react';
import { NextComponentType } from 'next';
import Link from 'next/link';
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  Box,
  Drawer,
  BottomNavigation,
  BottomNavigationAction,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Sidenav from './Sidenav/Sidenav';
import { Layout as LayoutProps } from './interfaces';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Header from './Header/Header';
import theme from '../../../../styles/theme';
import utilities from '../../../../styles/utilities';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import SidenavSub from './SidenavSub/SidenavSub';
import { useRouter, NextRouter } from 'next/router';
import { RouteType } from 'next/dist/lib/load-custom-routes';

const drawerWidth = 250;

const LayoutStyles = (theme: Theme) =>
  createStyles({
    layoutWrap: {
      flexGrow: 1,
      height: '100vh',
      width: '100vw',
      overflowY: 'hidden',
      overflowX: 'hidden',
      // border: '1px sol,id blue',
      ...utilities.columnFlex,
      paddingBottom: 56,
    },
    layoutHeader: {
      width: '100%',
      height: 50,
      // border: '1px solid red',
      ...utilities.rowFlex,
      padding: theme.spacing(0, 1),
    },
    layoutBottomNav: {
      // border: '1px solid red',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    layoutSidenav: {
      flexGrow: 1,
      height: '100vh',
      width: 300,
      // border: '1px solid red',
    },
    layoutMain: {
      flexGrow: 1,
      height: 'auto',
      minHeight: 400,
      display: 'flex',
      flexDirection: 'row',
      overflowY: 'scroll',
      overflowX: 'hidden',
      // border: '1px solid red',
    },
    layoutFooter: {
      flexGrow: 1,
      height: 'auto',
      minHeight: 400,
      // border: '1px solid red',
    },
  });

type LayoutStyleProps = LayoutProps & WithStyles<typeof LayoutStyles>;

const Layout = ({
  classes,
  children,
  detailHeader = false,
  headerText = '',
}: LayoutStyleProps): ReactElement => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const router: NextRouter = useRouter();

  const [openSidenav, setOpenSideNav] = useState(false);

  const [openSideSub, setOpenSideSub] = useState(false);

  const toggleDrawer = (open: boolean) => {
    // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return
    // }

    setOpenSideNav(open);
  };

  const openSubCategory = () => {
    setOpenSideSub((prevState) => !prevState);
  };

  const [value, setValue] = useState<number>(0);

  const navigateTo = (tag: string): void => {
    router.push(`${tag}`, `${tag}`);
  };

  useEffect(() => {
    const activePage: string = router.pathname.split('/')[1];
    if (activePage === '') {
      setValue(0);
    } else if (activePage === 'sale') {
      setValue(1);
    } else if (activePage === 'whishlist') {
      setValue(2);
    } else if (activePage === 'profile') {
      setValue(3);
    }
  }, [router.pathname]);
  return (
    <div className={classes.layoutWrap}>
      <Header toggleDrawer={toggleDrawer} detailHeader={detailHeader} headerText={headerText} />
      <SwipeableDrawer
        anchor={'left'}
        open={openSidenav}
        onClose={() => {
          toggleDrawer(false);
        }}
        onOpen={() => {
          toggleDrawer(true);
        }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        transitionDuration={{ enter: 400, exit: 400 }}
      >
        <Sidenav openSidenav={openSidenav} toggleDrawer={toggleDrawer} />
        {/* <SidenavSub /> */}
      </SwipeableDrawer>
      <div className={classes.layoutMain}>{children}</div>
      <div className={classes.layoutBottomNav}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            if (newValue === 0) {
              navigateTo('/');
            } else if (newValue === 1) {
              navigateTo('/products');
            } else if (newValue === 2) {
              navigateTo('/checkout/wishlist');
            } else if (newValue === 3) {
              navigateTo('/profile');
            }
          }}
          showLabels
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />

          <BottomNavigationAction label="Sale" icon={<WhatshotOutlinedIcon />} />

          <BottomNavigationAction label="Wishlist" icon={<FavoriteBorderOutlinedIcon />} />

          <BottomNavigationAction label="Profile" icon={<AccountCircleOutlinedIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
};
export default withStyles(LayoutStyles)(Layout);
