import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
  Calendar,
  usePickerState,
} from "@material-ui/pickers";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Fetch from '../script/Fetch.js';
import { Redirect } from 'react-router-dom';


const styles = theme => ({
  root: {

    backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AFYGh4BUEJp1ECvV6EkIA2TbIdo_5-pa2oNQ-b3P0OtQCgK_Eg)',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px`,
      },
    typography:{
        padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px`,
    },
    margin: {
    margin: theme.spacing.unit,
  },

  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});



class AddPrenotazione extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: new Date(),
            redirect: '',
        }
    }

    handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeName = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

    handleSubmit(){
        console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token') === null || localStorage.getItem('token') === 'null'){
            localStorage.setItem('linkThenLogin', '/addPrenotazione');
            this.setState({redirect: '/'})
        }
        else{
            Fetch.addPrenotazione(localStorage.getItem('token'), this.state.data);
        }
    }


    render(){
        const { classes } = this.props;

        /*<MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Calendar {...{date: this.state.value, onChange:(date, isFinish)=>{this.setState({value: date})}}}/>
                </MuiPickersUtilsProvider>*/
        if(this.state.redirect !== '')
            return (<Redirect push to={this.state.redirect}/>);

        return(
            <div className = {classes.root}>
            <Paper className = {classes.paper} elevation={4}>
                <Typography variant='h2'>REGISTRA APPUNTAMENTO</Typography>
                <Typography className={classes.typography}>Data disponibilità:
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker
                        value={this.state.data}
                        onChange={(date)=>this.setState({data: new Date(date.getTime())})}
                        ampm = {false}
                        animateYearScrolling
                        disablePast
                        minutesStep = {30}
                        />
                    </MuiPickersUtilsProvider>
                </Typography>


                <Button variant="contained" className={classes.button} onClick={()=>this.handleSubmit()}>
                    Invia
                </Button>
                  <Paper className = {classes.paper} elevation={4}>
                  <Typography variant='h6'>ORARI: </Typography>
                  <Typography variant='h6'>LUNEDI : 8:00-18.00 </Typography>
                  <Typography variant='h6'>MARTEDI : 8:00-18.00</Typography>
                  <Typography variant='h6'>MERCOLEDI : 8:00-18.00</Typography>
                  <Typography variant='h6'>GIOVEDI : 8:00-18.00</Typography>
                  <Typography variant='h6'>VENERDI : 8:00-18.00</Typography>
                  <Typography variant='h6'>SABATO : 8:00-18.00</Typography>
                  <Typography variant='h6'>DOMENICA : 8:00-18.00</Typography>



                  </Paper>
            </Paper>
            </div>
        )
    }
}
export default withStyles(styles)(AddPrenotazione);
