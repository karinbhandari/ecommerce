import React, { ReactElement, useState } from 'react';
import { NextComponentType } from 'next';
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  IconButton,
  Typography,
} from '@material-ui/core';
import { HeaderProps } from '../interfaces';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import utilities from '../../../../../styles/utilities';
import SearchBox from '../../SearchBox/SearchBox';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { NextRouter, useRouter } from 'next/router';
import { goBack } from '../../../../../utilities/router';

const drawerWidth = 250;

const HeaderStyles = (theme: Theme) =>
  createStyles({
    headerWrap: {
      width: '100%',
      height: 'auto',
      // border: '1px solid red',
      ...utilities.columnFlex,
    },
    headerTop: {
      width: '100%',
      height: 50,
      ...utilities.rowFlex,
      padding: theme.spacing(0, 1),
      borderBottom: `1px solid ${theme.palette.grey[50]}`,
    },
    headerBottom: {
      width: '100%',
      height: 50,
      // border: '1px solid red',
      padding: theme.spacing(0, 1),
    },
    headerIcon: {
      width: 50,
      height: '100%',
      '& > button': {
        '& > span': {
          '& > svg': {
            // border: '1px solid red',
            fontSize: 30,
          },
        },
      },
      // border: '1px solid red'
    },
    headerImg: {
      width: `calc(100% - 100px)`,
      height: '100%',
      // border: '1px solid red'
    },
    goBackHeader: {
      width: '100%',
      height: 50,
      borderBottom: `1px solid ${theme.palette.grey[50]}`,
      '& > div': {
        width: '100%',
        height: 50,
        ...utilities.rowFlexCenter,
        '& > div': {
          width: 250,
          ...utilities.rowFlexCenter,
          height: '100%',
          // border: '1px solid red',
        },
      },
      '& > button': {
        position: 'absolute',
      },
    },
    headerSearch: {
      width: 50,
      height: '100%',
      '& > button': {
        '& > span': {
          '& > svg': {
            // border: '1px solid red',
            fontSize: 32,
          },
        },
      },
      // border: '1px solid red'
    },
    // border: '1px solid red'
  });

type HeaderStylesProps = HeaderProps & WithStyles<typeof HeaderStyles>;

const Header = ({
  classes,
  toggleDrawer,
  detailHeader = false,
  headerText = '',
}: HeaderStylesProps): ReactElement => {
  const lang = 'en';
  const router: NextRouter = useRouter();
  const [showSearchBox, setShowSearchBox] = useState<boolean | undefined>(false);
  const openDrawer = () => {
    toggleDrawer(true);
  };
  const showSearchBoxHandler = () => {
    setShowSearchBox(true);
  };
  return (
    <div className={classes.headerWrap}>
      {detailHeader ? (
        <div className={classes.goBackHeader}>
          <IconButton
            onClick={() => {
              goBack(router);
            }}
          >
            <ArrowBackIosRoundedIcon />
          </IconButton>
          <div>
            <div>
              <Typography component="p" variant="body1">
                some product
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.headerTop}>
          <div className={classes.headerIcon}>
            <IconButton onClick={openDrawer}>
              <DehazeRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.headerImg}></div>
          <div className={classes.headerSearch}>
            <IconButton onClick={showSearchBoxHandler}>
              <SearchRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.headerIcon}>
            <IconButton onClick={() => {}}>
              <LocalMallOutlinedIcon />
            </IconButton>
          </div>
        </div>
      )}
      {showSearchBox && (
        <div className={classes.headerBottom}>
          <SearchBox setState={setShowSearchBox} />
        </div>
      )}
    </div>
  );
};

export default withStyles(HeaderStyles)(Header);
