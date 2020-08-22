import React, { ReactElement, useState, ChangeEvent, SyntheticEvent, useEffect } from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { NextComponentType } from 'next';
import {
  SwipeableDrawer,
  List,
  IconButton,
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Theme,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
// import AddRoundedIcon from '@material-ui/icons/AddRounded';
// import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import utilities from '../../../../styles/utilities';
import { Accordion, AccordionSummary, AccordionDetails } from '../Accordion/Accordion';

const FiltersStyles = (theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      width: '100%',
    },
    filtersHead: {
      height: 50,
      width: '100%',
      //   border: '1px solid red',
      ...utilities.rowFlexCenter,
      '& > button': {
        position: 'absolute',
        right: 5,
        top: 'auto',
      },
    },
    filtersBody: {
      height: 'calc(100% - 117px)',
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    filtersBodyList: {},
    filtersBodyListItem: {
      width: '100%',
      padding: theme.spacing(0),
    },
    filtersBodyListSub: {
      padding: theme.spacing(0),
      //   border: '1px solid red',
      width: '100%',
    },
    filtersBodyListSubItem: {
      //   border: '1px solid red',
    },
    filtersFoot: {
      height: 67,
      width: '100%',
      borderTop: `1px solid ${theme.palette.grey[50]}`,
      ...utilities.rowFlexCenter,
      //   border: '1px solid red',
      '& >:nth-child(2)': {
        marginLeft: 20,
      },
    },
  });

const filterDummyData = [
  {
    filterTitle: 'Size',
    subFilters: ['10', '20', '30', '40', '40'],
  },
  {
    filterTitle: 'Fit',
    subFilters: ['Straight', 'Slim', 'Tapper', 'Skinny', 'BootCut'],
  },
  {
    filterTitle: 'Color',
    subFilters: ['Blue', 'Pink', 'Black', 'Green', 'Grey', 'Khaki'],
  },
  {
    filterTitle: 'Style',
    subFilters: ['Chino', 'Croped', 'Cargo'],
  },
];

type FiltersType = {
  toogleFilter: boolean;
};

type FiltersStylesProps = FiltersType & WithStyles<typeof FiltersStyles>;

const Filters = ({ classes, toogleFilter }: FiltersStylesProps): ReactElement => {
  const [openFilter, setOpenFilter] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<string>('panel0');

  const openFilterHandler = (event) => {
    // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    setOpenFilter(true);
  };
  const closeFilterHandler = (event) => {
    // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    setOpenFilter(false);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    setOpenFilter((prevState) => !prevState);
  }, [toogleFilter]);
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={openFilter}
      onClose={closeFilterHandler}
      onOpen={openFilterHandler}
    >
      <div className={classes.root}>
        <div className={classes.filtersHead}>
          <Typography variant="body1" component="p">
            FILTERS
          </Typography>
          <IconButton onClick={closeFilterHandler}>
            <ClearRoundedIcon />
          </IconButton>
        </div>
        <div className={classes.filtersBody}>
          <List className={classes.filtersBodyList}>
            {filterDummyData.map((fD: any, index: number) => {
              return (
                <ListItem className={classes.filtersBodyListItem} key={index}>
                  <Accordion
                    square
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreRoundedIcon />}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography variant="body1" component="p">
                        {fD.filterTitle}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List className={classes.filtersBodyListSub}>
                        {fD.subFilters.map((fDSub, index) => (
                          <ListItem className={classes.filtersBodyListSubItem} key={index}>
                            <Typography variant="body1" component="p">
                              {fDSub}
                            </Typography>
                            {/* <ListItemText id={index} primary={fDSub} /> */}
                            <ListItemSecondaryAction>
                              <Checkbox
                                edge="end"
                                // checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': index }}
                              />
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className={classes.filtersFoot}>
          <Button variant="contained" color="default">
            CLEAR
          </Button>
          <Button variant="contained" color="primary">
            APPLY
          </Button>
        </div>
      </div>
      {/* <List>
        <ListItem>
          <Typography variant="body2" component="p">
            Filters
          </Typography>
        </ListItem>
      </List> */}
    </SwipeableDrawer>
  );
};

export default withStyles(FiltersStyles)(Filters);
