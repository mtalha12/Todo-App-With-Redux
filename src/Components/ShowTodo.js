import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    margin:3,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
    // const TodoData = []
function ShowTodoComponent(props) {
  const { classes } = props;

  const allUsersData = props.getAllUsersData;
  console.log(allUsersData)
  const AllUsersData = []
  for (let key in allUsersData){
     const a = allUsersData[key]
     console.log(a)
     AllUsersData.push(a)
     console.log(AllUsersData)
  }

  return (
    <Paper className={classes.root} >
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell >User Name</CustomTableCell>
            <CustomTableCell >User Wish</CustomTableCell>
            <CustomTableCell align="center">Update</CustomTableCell>
            {/* <sCustomTableCell align="right">Delete</CustomTableCell> */}
            <CustomTableCell align="center">Delete</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AllUsersData.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.userName}
              </CustomTableCell>
              <CustomTableCell >{row.userWish}</CustomTableCell>
              <CustomTableCell align="center"><button onClick={()=>props.update(row)}>Update</button></CustomTableCell>
              {/* <CustomTableCell align="right">{row.carbs}</CustomTableCell> */}
              <CustomTableCell align="center"><button onClick={()=>props.delete(row)}>Delete</button></CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ShowTodoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowTodoComponent);