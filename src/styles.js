import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#3f51b5',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
export const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles(theme => ({
    inventoryContainer: {
        marginTop: 20
    },
    saveButton: {
        marginTop: 15,
        backgroundColor: '#1976d2',
        display: 'block',
        marginLeft: 'auto'
    },
    formControl: {
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    plusButton: {
        fontSize: 37,
        height: 30,
        width: 36,
        marginTop: 10
    },
}));

export default useStyles;