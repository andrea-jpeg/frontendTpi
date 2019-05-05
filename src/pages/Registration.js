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
    backgroundImage: 'data:image/jpeg;base64,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',
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
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
           <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="nome">nome</InputLabel>
            <Input id="name" name="name" autoComplete="name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="cognome">cognome</InputLabel>
            <Input id="cognome" name="cognme" autoComplete="cognome" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            sing up
          </Button>
        </form>

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
