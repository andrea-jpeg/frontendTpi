import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Redirect } from 'react-router-dom';
import Fetch from '../script/Fetch.js';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  root: {
    backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AFYGh4BUEJp1ECvV6EkIA2TbIdo_5-pa2oNQ-b3P0OtQCgK_Eg)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class Registration extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: '',
            nome: '',
            cognome: '',
            email: '',
            password: '',
            message: '',
            redirect: '',
        }

    }

handleSubmit(e){
    e.preventDefault();
    Fetch.registration(this.state.nome, this.state.cognome, this.state.email, this.state.password)
        .then(res => {
            if (res.error !== undefined){
                this.setState({message: res.error})
            }
            if(res.token !== undefined){
                this.setState({redirect : '/addPrenotazione'})
            }
        })
}


 render(){
  const { classes } = this.props;

  let tileData = [{
      title: "notte blu",
      titleBar: "piscina con lettini",
      img: "https://www.internationalflora.com/wp-content/uploads/2016/06/fiori-gay.jpg"
  },
  {
      title: "idromassaggio",
      titleBar: "idromassaggio",
      img: "https://www.sanguineto.it/images/phocagallery/centro_benessere/centro-benessere-montepulciano.jpg"
  },
  {
      title: "massaggi schina",
      titleBar: "massaggi schiena",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqDRGyDBKgrpxMBKxKpD_EQFuoZ59AeS617gZToLFp9d5qHPd"

  },
  {
      title: "viso",
      titleBar: "trattamenti viso",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMZ1W2T1Gn3oeAEssFvByJYxW_r7BYCkfpOIVcWfHXqu98gwb"
  },
  {
      title: "BELLEZZA",
      titleBar: "bellezza",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtJwk4QoITQpr9LmaxxwC-CinfG5wnA3C-6TXoWm1xcsgfTwr"
  }
  ];
   if(this.state.redirect !== '')
    return (<Redirect push to={this.state.redirect}/>)

  return (
    <main className={classes.main}>

      <CssBaseline />
      <Paper className={classes.paper}>
      <p>BENVENUTI</p>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          sign up
        </Typography>
        <form className={classes.form} onSubmit={(e)=>this.handleSubmit(e)}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" onChange={(e)=>this.setState({email: e.target.value})} autoComplete="email" autoFocus value={this.state.email}  />
          </FormControl>
           <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="nome">nome</InputLabel>
            <Input id="nome" name="nome" onChange={(e)=>this.setState({nome: e.target.value})} autoComplete="nome" autoFocus value={this.state.nome}  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="cognome">cognome</InputLabel>
            <Input id="cognome" name="cognome"  onChange={(e)=>this.setState({cognome: e.target.value})} autoComplete="cognome" autoFocus value={this.state.cognome} autoComplete="cognome" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password"  onChange={(e)=>this.setState({password: e.target.value})} autoComplete="password" autoFocus value={this.state.password}id="password" autoComplete="current-password" />
          </FormControl>
            <Typography color='error'>{this.state.errore}</Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign up
          </Button>

        </form>
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {()=>{
                this.setState({ redirect:'/'})
            }}
          >
            Sign in
          </Button>

      </Paper>

      <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

    </div>
    </main>
  );
}
}


export default withStyles(styles)(Registration);
