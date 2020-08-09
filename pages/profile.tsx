import React, { useState } from 'react'
import Layout from '../src/modules/core/components/Layout'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import utilities from '../src/styles/utilities'
import { Typography, Theme, Avatar, Tabs, Tab } from '@material-ui/core'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded'
import TabPanel from '../src/modules/core/components/TabPanel/TabPanel'
import Login from '../src/modules/Login/Login'
import Signup from '../src/modules/Signup/Signup'

const ProfileStyle = (theme: Theme) =>
  createStyles({
    profileWrap: {
      // border: '1px solid red',
      width: '100%',
      height: '100vh',
    },
    profileDetail: {
      height: 80,
      with: '100%',
      // border: '1px solid blue',
      ...utilities.rowFlex,
    },
    profileDetailLeft: {
      height: '100%',
      width: '80px',
      // border: '1px solid red',
      ...utilities.rowFlexCenter,
    },
    profileDetailRight: {
      height: '100%',
      width: 'calc(100% - 80px)',
      // border: '1px solid red',
      '& > div': {
        height: '50%',
        width: '100%',
        ...utilities.rowFlexStartCenter,
        padding: theme.spacing(0, 1),
        '& > p': {
          fontWeight: 'bold',
        },
      },
    },
    avatarLarge: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    profileTab: {
      height: 50,
      with: '100%',
      borderTop: `1px solid ${theme.palette.grey[50]}`,
      borderBottom: `1px solid ${theme.palette.grey[50]}`,
    },
  })

type ProfileProps = {}

type ProfileStyleType = ProfileProps & WithStyles<typeof ProfileStyle>

const Profile = ({ classes }: ProfileStyleType) => {
  const [value, setValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Layout>
      <div className={classes.profileWrap}>
        <div className={classes.profileDetail}>
          <div className={classes.profileDetailLeft}>
            <Avatar className={classes.avatarLarge} />
          </div>
          <div className={classes.profileDetailRight}>
            <div>
              <Typography component="p" variant="body1">
                Hi Guest
              </Typography>
            </div>
            <div></div>
          </div>
        </div>
        <div className={classes.profileTab}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" />
            <Tab label="Signup" />
          </Tabs>
        </div>
        <div>
          <TabPanel value={value} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Signup />
          </TabPanel>
        </div>
      </div>
    </Layout>
  )
}

export default withStyles(ProfileStyle)(Profile)
