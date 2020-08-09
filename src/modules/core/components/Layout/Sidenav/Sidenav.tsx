import React, { ReactElement } from 'react'
import { useState, useEffect, useContext } from 'react'
import { NextComponentType } from 'next'
import { useRouter, NextRouter } from 'next/router'
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  IconButton,
} from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import Context from '../../../../../context'
// import { setActiveSidenav } from '../../../func'
import { context as contextType } from '../../../../../context/interface'
import InboxIcon from '@material-ui/icons/InboxOutlined'
import { SubMenu, MainMenu, MainMenuFoot } from '../menu'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import utilities from '../../../../../styles/utilities'

const width = 300

const SidenavStyles = (theme: Theme) =>
  createStyles({
    sidenavWrap: {
      // border: '1px solid green',
      width: width,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    sidenavHead: {
      height: 50,
      width: '100%',
      background: theme.palette.common.black,
      ...utilities.rowFlexEndCenter
    },
    sideNavClose: {
      color: theme.palette.common.white,
    },
    sidenavBody: {
    //   height: `calc(100% - 150px)`,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    sidenavFoot: {
    //   height: `calc(100% - 150px)`,
        height: '100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red'
    },
    sidenavList: {
      // border: '1px solid blue',
    },
    sidenavListItem: {
      height: 60,
      borderBottom: `1px solid ${theme.palette.grey[50]}`,
      '& > :nth-child(1)': {
        '& > span': {
          fontSize: 16,
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }
      },
      '& > :nth-child(2)': {
        ...utilities.rowFlexEndCenter,
        marginTop: theme.spacing(-0.4),
        '& > svg': {
          fontSize: 20
        }
      }
    },
    // sidenavFoot: {
    //   // border: '1px solid yellow',
    //   background: theme.palette.common.black,
    //   padding: theme.spacing(3, 2)
    // },
    sidenavFootTop: {
      borderBottom: `1px solid ${theme.palette.common.white}`,
    },
    sidenavFootBody: {
      // border: '1px solid yellow',
      padding: theme.spacing(2, 0)
    },
    sidenavFootTexts: {
      fontSize: 16,
      color: theme.palette.common.white,
      // border: '1px solid red',
      height: 35
    },
  })

type SidenavProps = {
  openSidenav: boolean
  toggleDrawer: (open: boolean) => void
}

type SidenavStylesProps = SidenavProps & WithStyles<typeof SidenavStyles>

const Sidenav = ({
  openSidenav,
  toggleDrawer,
  classes,
}: SidenavStylesProps): ReactElement => {
  const router: NextRouter = useRouter()

  const context = useContext<contextType>(Context)

  const lang: string = 'en'

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeSideNav = () => {
    toggleDrawer(false)
  }

  return (
    <div className={classes.sidenavWrap}>
        <div className={classes.sidenavHead}>
            <IconButton className={classes.sideNavClose} onClick={closeSideNav}>
                <ClearRoundedIcon />
            </IconButton>
        </div>
        <div className={classes.sidenavBody}>
            <List component="nav" className={classes.sidenavList} aria-label="main mailbox folders">
                {MainMenu?.map((subMenu, index) => (
                    <ListItem
                        key={index}
                        button
                        className={classes.sidenavListItem}
                        data-testid={`sidenav-list-item-${index}`}
                        selected={selectedIndex === index}
                        // onClick={() =>{}}
                    >
                        <ListItemText primary={subMenu[lang].name}/>
                        <ListItemIcon>
                          <ArrowForwardIosRoundedIcon />
                        </ListItemIcon>
                    </ListItem>
                ))}
              </List>
        </div>
        <div className={classes.sidenavFoot}>
            <div className={classes.sidenavFootTop}>
                  <Typography className={classes.sidenavFootTexts} component="p" variant="body1">
                    Change Language
                  </Typography>
            </div>
            <div className={classes.sidenavFootBody}>
                  {
                    MainMenuFoot.map((mainMenu, index) => (
                      <Typography className={classes.sidenavFootTexts} key={index} component="p" variant="body1">
                        {mainMenu[lang].name}
                      </Typography>
                    ))
                  }
            </div>
        </div>
    </div>
  )
}

export default withStyles(SidenavStyles)(Sidenav)
