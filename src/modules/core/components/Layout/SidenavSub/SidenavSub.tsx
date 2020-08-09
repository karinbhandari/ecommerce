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
} from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import Context from '../../../../../context'
// import { setActiveSidenav } from '../../../func'
import { context as contextType } from '../../../../../context/interface'
import InboxIcon from '@material-ui/icons/InboxOutlined'
import { SubMenu } from '../menu'
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const width = 300

const SidenavSubStyles = (theme: Theme) =>
  createStyles({
    sidenavWrap: {
      border: '1px solid green',
      width: width,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    sidenavHead: {
      height: 80,
      width: '100%',
    },
    // sideNavAvatar: {
    //   height: 150,
    //   width: 150,
    //   alignSelf: 'center',
    //   borderRadius: '50%',
    //   '& img': {
    //     height: 'auto',
    //     width: 100,
    //   },
    // },
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
    // sidenavList: {
    //   // border: '1px solid red',
    // },
    // sidenavListItem: {
    //   // border: '1px solid blue',
    //   height: 40,
    //   borderRadius: theme.spacing(0.5),
    //   margin: theme.spacing(1, 0),
    // },
    // sidenavIcon: {
    //   // border: '1px solid yellow',
    //   minWidth: 40,
    // },
    // sidenavText: {
    //   // border: '1px solid green',
    //   '& span': {
    //     fontWeight: 600,
    //     fontSize: 14,
    //     color: theme.palette.primary.main,
    //   },
    // },
  })

const SidenavSub = ({
  classes,
}: WithStyles<typeof SidenavSubStyles>): ReactElement => {
  const router: NextRouter = useRouter()

  const context = useContext<contextType>(Context)

  const lang: string = context?.lang || 'en'

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <div className={classes.sidenavWrap}>
        <div className={classes.sidenavHead}>
            
        </div>
        <div className={classes.sidenavBody}>
            <List component="nav" aria-label="main mailbox folders">
            {SubMenu[lang]?.map((subMenu, index) => (
                <ListItem
                    key={index}
                    button
                    data-testid={`sidenav-list-item-${index}`}
                    selected={selectedIndex === index}
                    // onClick={()=>{}}
                >
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<AddRoundedIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>{subMenu[lang].name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {
                                    subMenu?.subCat?.map((subCat, index) => (
                                        <ListItem key={index}>
                                            <ListItemText primary={subCat[lang].name}/>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
            ))}
            </List>
        </div>
        <div className={classes.sidenavFoot}>
            
        </div>
    </div>
  )
}

export default withStyles(SidenavSubStyles)(SidenavSub)
