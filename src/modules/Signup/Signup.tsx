import React, { useState } from 'react';
import { createStyles, WithStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button, Checkbox } from '@material-ui/core';
import Link from 'next/link';
import Password from '../core/components/Password/Password';
import utilities from '../../styles/utilities';

const SignupStyle = (theme: Theme) =>
  createStyles({
    signupWrap: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    signupTitle: {
      ...utilities.rowFlexCenter,
      padding: theme.spacing(1, 0),
    },
    signupBody: {
      padding: theme.spacing(1, 0),
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(1, 0),
      },
    },
    signupDetail: {
      padding: theme.spacing(1, 0),
    },
    signupNewsletter: {
      display: 'flex',
      flexDirection: 'row',
    },
    signupButton: {
      padding: theme.spacing(1, 0),
    },
  });

type SignupProps = {};

type SignuptyleType = SignupProps & WithStyles<typeof SignupStyle>;

const Signup = ({ classes }: SignuptyleType) => {
  return (
    <Paper className={classes.signupWrap}>
      <div className={classes.signupTitle}>
        <Typography variant="h6" component="h1">
          NEW TO TECHPREME.COM?
        </Typography>
      </div>
      <div className={classes.signupBody}>
        <TextField id="outlined-email" label="Email" variant="outlined" />
        <Password />
        <Typography component="a" variant="body1">
          Password must have at least 8 characters
        </Typography>
      </div>
      <div className={classes.signupNewsletter}>
        <Checkbox inputProps={{ 'aria-label': 'newsletter-signup-checkbox' }} />
        <Typography component="a" variant="body1">
          Send me news & offers from Levi's®.
        </Typography>
      </div>
      <div className={classes.signupButton}>
        <Button variant="outlined" color="primary" fullWidth>
          JOIN NOW
        </Button>
      </div>
      <div className={classes.signupDetail}>
        <Typography component="p" variant="body1">
          By creating an account, you confirm you have read, understand and accept the LS&Co.
          <Link href="" as="">
            Privacy Policy
          </Link>
          <Link href="" as="">
            Terms of Use
          </Link>
        </Typography>
      </div>
    </Paper>
  );
};

export default withStyles(SignupStyle)(Signup);
