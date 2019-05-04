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
    }
});



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
        }
    }

    handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };



    render(){
        const { classes } = this.props;

        /*<MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Calendar {...{date: this.state.value, onChange:(date, isFinish)=>{this.setState({value: date})}}}/>
                </MuiPickersUtilsProvider>*/

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

            </Paper>
        )
    }
}
export default withStyles(styles)(AddPrenotazione);