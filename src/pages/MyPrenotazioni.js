import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fetch from '../script/Fetch.js';
import { Typography } from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
        this.state = {
            elementi: [],
            redirect : ''
        }
    }

    componentDidMount(){
        Fetch.getPrenotazioni(localStorage.getItem('token'))
            .then(res => this.setState({elementi : res}));
    }

    getData(elemento){
        return this.formatDate(new Date(elemento.data))
    }

    getMinutes(elemento){
        var data = new Date(elemento.data);
        return ''+data.getHours()+' : '+data.getMinutes();
    }

     formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}


    render(){
        const {classes} = this.props;
        console.log(this.state);
        if(this.state.redirect !== '')
            return (<Redirect push to={this.state.redirect}/>)

        return(
            <Paper className={classes.root}>
            <Typography variant ='h3'>Calendario Appuntamenti
                <Button variant="contained" className={classes.button} onClick={()=>this.setState({redirect: '\addPrenotazione'})}>
                    Prenotati
                </Button>
            </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align = 'right'>Ora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.elementi.map((elemento, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {elemento.email}
              </TableCell>
              <TableCell align="right">{this.getData(elemento)}</TableCell>
            <TableCell align="right">{this.getMinutes(elemento)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
        )
    }
}
export default withStyles(styles)(MyPrenotazioni);