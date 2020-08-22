import React, { ReactElement, FunctionComponent } from 'react';
import useIncDescButtonStyles from './styles';
import { IncDescProps } from './types';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const IncDescButton: FunctionComponent<IncDescProps> = (props): ReactElement => {
  const { width } = props;
  const classes = useIncDescButtonStyles(props);
  return (
    <div className={classes.root}>
      <ButtonBase>
        <RemoveRoundedIcon fontSize="small" />
      </ButtonBase>
      <Typography variant="body2" component="p">
        0
      </Typography>
      <ButtonBase>
        <AddRoundedIcon fontSize="small" />
      </ButtonBase>
    </div>
  );
};

export default IncDescButton;
