import { withStyles } from '@material-ui/styles';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { Theme } from '@material-ui/core';

export const Accordion = withStyles((theme: Theme) => ({
  root: {
    border: `1px solid ${theme.palette.grey[50]}`,
    width: '100%',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}))(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 50,
    '&$expanded': {
      minHeight: 50,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(0.5),
    background: '#f9f9f9',
  },
}))(MuiAccordionDetails);
