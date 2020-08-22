import React, { useState } from 'react';
import { createStyles, WithStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import Link from 'next/link';
import Password from '../core/components/Password/Password';
import utilities from '../../styles/utilities';

const LoginStyle = (theme: Theme) =>
  createStyles({
    loginWrap: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    loginTitle: {
      ...utilities.rowFlexCenter,
      padding: theme.spacing(1, 0),
    },
    loginBody: {
      padding: theme.spacing(1, 0),
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(1, 0),
      },
    },
    loginPrivacy: {
      padding: theme.spacing(1, 0),
    },
    loginButton: {
      padding: theme.spacing(1, 0),
    },
  });

type LoginProps = {};

type LoginStyleType = LoginProps & WithStyles<typeof LoginStyle>;

const Login = ({ classes }: LoginStyleType) => {
  return (
    <Paper className={classes.loginWrap}>
      <div className={classes.loginTitle}>
        <Typography variant="h6" component="h1">
          WELCOME BACK
        </Typography>
      </div>
      <div className={classes.loginBody}>
        <TextField id="outlined-email" label="Email" variant="outlined" />
        <Password />
        <Typography component="a" variant="body1">
          <Link href="" as="">
            Forgot Password?
          </Link>
        </Typography>
      </div>
      <div className={classes.loginPrivacy}>
        <Typography component="p" variant="body1">
          By connecting, you agree to the LS&Co.
          <Link href="" as="">
            Privacy Policy
          </Link>
          <Link href="" as="">
            Terms of Use
          </Link>
        </Typography>
      </div>
      <div className={classes.loginButton}>
        <Button variant="contained" color="primary" fullWidth>
          LOGIN
        </Button>
      </div>
    </Paper>
  );
};

export default withStyles(LoginStyle)(Login);
