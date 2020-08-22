import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IncDescProps } from './types';
import utilities from '../../../../styles/utilities';

const useIncDescButtonStyles = makeStyles<Theme, IncDescProps>((theme) =>
  createStyles({
    root: ({ width }) => ({
      width: width | 150,
      ...utilities.rowFlexCenter,
      '& > button': {
        width: 40,
        height: 30,
        ...utilities.rowFlexCenter,
        border: `1px solid ${theme.palette.common.black}`,
        padding: theme.spacing(0.5),
        borderRadius: 2,
      },
      '& > p': {
        width: 30,
        ...utilities.rowFlexCenter,
        margin: theme.spacing(0, 1),
      },
    }),
  })
);

export default useIncDescButtonStyles;
