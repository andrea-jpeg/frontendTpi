import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class MyPrenotazioni extends  React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.elementi.map((elemento, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {elemento.email}
              </TableCell>
              <TableCell align="right">{elemento.data}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
        )
    }
}
export default withStyle(styles)(MyPrenotazioni);