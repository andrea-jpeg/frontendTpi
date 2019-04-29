import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const styles = theme => ({
  button: {
    margin: "50px",
  },
  input: {
    display: 'none',
  },
  titolo: {
    marginTop: theme.spacing.unit * 50,
  },
  bottoni:{
    
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      showPassword: false,
      password: "",
    })
  }
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          id="outlined-adornment-password"
          className={[classes.margin, classes.textField]}
          variant="outlined"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className={classes.titolo}>
          <Typography variant="h1" component="h3">
            BENVENUTI!!!!!
        </Typography>
          <Typography component="p">
            Centro Massaggi Brixia
        </Typography>
        </div>
        <div className={classes.bottoni}>
          <Button variant="contained" href="#contained-buttons" className={classes.button}>
            Link
        </Button>
          <Button variant="contained" component="span" className={classes.button}>
            Upload
        </Button>
        </div>
      </div>
    );
  }
}



export default withStyles(styles)(MainPage);