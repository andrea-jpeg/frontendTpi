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

const ranges = [
    {
        value: '5',
    },
    {
        value: '10',
    },
    {
        value: '20',
    },
    {
        value: '30',
    },
    {
        value: '40',
    },
    {
        value: '60',
    },
    {
        value: '120',
    },
]

class AddPrenotazione extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            startDate: new Date(),
            finishDate: new Date(),
            lunedi: false,
            martedi: false,
            mercoledi: false,
            giovedi: false,
            venerdi: false,
            sabato: false,
            domenica: false,
            intervalloMinuti: 0,
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
        var giorni = '';
        if(this.state.lunedi) giorni += 'lunedi,';
        if(this.state.martedi) giorni += 'martedi,';
        if(this.state.mercoledi) giorni += 'mercoledi,';
        if(this.state.giovedi) giorni += 'giovedi,';
        if(this.state.venerdi) giorni += 'venerdi,';
        if(this.state.sabato) giorni += 'sabato,';
        if(this.state.domenica) giorni += 'domenica,';
        if(giorni.length > 0) giorni.substr(0, giorni.length-1); // per canellare l'ultima virgola in eccesso
        console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token') === 'null'){
            localStorage.setItem('linkThenLogin', '/addPrenotazione');
            this.setState({redirect: '/'})
        }
        else
            Fetch.addEvento(localStorage.getItem('token'), this.state.startDate, this.state.finishDate, giorni, this.state.intervalloMinuti)
    }


    render(){
        const { classes } = this.props;

        /*<MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Calendar {...{date: this.state.value, onChange:(date, isFinish)=>{this.setState({value: date})}}}/>
                </MuiPickersUtilsProvider>*/
        if(this.state.redirect !== '')
            return (<Redirect push to={this.state.redirect}/>);

        return(
            <Paper className = {classes.paper} elevation={4}>
                <Typography variant='h2'>Inserire disponibilità appuntamenti</Typography>
                <Typography className={classes.typography}>Data di inizio disponibilità:
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker
                        value={this.state.startDate}
                        onChange={(date)=>this.setState({startDate: date})}
                        ampm = {false}
                        animateYearScrolling
                        disablePast
                        minutesStep = {5}
                        />
                    </MuiPickersUtilsProvider>
                </Typography>
                <Typography className={classes.typography}>Data di fine disponibilità:
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker
                        value={this.state.finishDate}
                        onChange={(date)=>this.setState({finishDate: date})}
                        ampm = {false}
                        animateYearScrolling
                        disablePast
                        minutesStep = {5}
                        minDate = {this.state.startDate}
                         />
                    </MuiPickersUtilsProvider>
                </Typography>
                <Typography>Seleziona i giorni da escludere:</Typography>
                <Typography>
                    <Checkbox
                        checked={this.state.lunedi}
                        onChange={this.handleChange('lunedi')}
                        value="checkedA"
                    /> lunedi
                    <Checkbox
                        checked={this.state.martedi}
                        onChange={this.handleChange('martedi')}
                        value="martedi"
                    /> martedi
                    <Checkbox
                        checked={this.state.mercoledi}
                        onChange={this.handleChange('mercoledi')}
                        value="mercoledi"
                    /> mercoledi
                    <Checkbox
                        checked={this.state.giovedi}
                        onChange={this.handleChange('giovedi')}
                        value="giovedi"
                    /> giovedi
                    <Checkbox
                        checked={this.state.venerdi}
                        onChange={this.handleChange('venerdi')}
                        value="venerdi"
                    /> venerdi
                    <Checkbox
                        checked={this.state.sabato}
                        onChange={this.handleChange('sabato')}
                        value="sabato"
                    /> sabato
                    <Checkbox
                        checked={this.state.domenica}
                        onChange={this.handleChange('domenica')}
                        value="domenica"
                    /> domenica
                </Typography>
                <Typography>
                inserire intervallo di tempo tra un incontro e l'altro:
                    <TextField
                    select
                    label=""
                    className={(classes.margin, classes.textField)}
                    value={this.state.intervalloMinuti}
                    onChange={this.handleChangeName('intervalloMinuti')}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">min</InputAdornment>,
                    }}
                    >
                    {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>
                </Typography>
                <Button variant="contained" className={classes.button} onClick={()=>this.handleSubmit()}>
                    Invia
                </Button>
            </Paper>
        )
    }
}
export default withStyles(styles)(AddPrenotazione);