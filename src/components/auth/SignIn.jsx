import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {fireBaseAPI} from '../../services/firebase';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [user, setUser] = useState({remember: false, email:'', pswd: ''})

  function handleChange(eventValue, attribute) {
    setUser({...user, [attribute]: eventValue});
  }

  function handleSubmit( event) {
    event.preventDefault();

    if(formIsValid()) {
        fireBaseAPI.signInWithEmailAndPassword(user.email, user.pswd).then(res => {
            console.log("AUTH SUCCESS !")
            console.log(res)
        }).catch(err => {
            console.error("AUTH ERROR !")
            console.log(err)
        }); 
    }
  }

  function formIsValid() {
    if(!user.email) {
        alert('please enter your email');
        return false;
    }
    if(!user.pswd) {
        alert('please enter your password');
        return false;
    }
    return true;
  }

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <form className={classes.form} noValidate
            onSubmit={(e => handleSubmit(e))}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={user.email}
                onChange={e => handleChange(e.target.value, 'email')}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.pswd}
                onChange={e => handleChange(e.target.value, 'pswd')}
            />
            <FormControlLabel
                control={
                    <Checkbox 
                        color="primary" 
                        checked={user.remember}
                        onChange={e => handleChange(e.target.checked, 'remember')}
                    />}
                label="Remember me"
                />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // TODO disabled
            >
                Sign In
            </Button>
            <Grid container>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid> */}
                <Grid item>
                <Link to="/SignUp" variant="body2">
                    Don't have an account? Sign Up
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
    </Container>
  );
}
