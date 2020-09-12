import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// import axios and MaterialUI

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 290,
    maxWidth: 290,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SignupForm(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  });

  const inputChange = (e) => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/auth/register', formState)
      .then((res) => {
        console.log('Axios submit form res', res);
        window.localStorage.setItem('token', res.data.payload);

        history.push('/dashboard');
      })
      .catch((err) => console.log(err));

    setFormState({ firstname: '', lastname: '', username: '', password: '' });
  };

  return (
    <div style={{ paddingTop: '4%' }}>
      <Card
        className={classes.root}
        style={{ opacity: '0.9', marginLeft: '10%' }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            Signup
          </Typography>
          <br />
          <form
            onSubmit={submitForm}
            className={classes.form}
            autoComplete="off"
          >
            <FormControl required>
              <TextField
                autoFocus
                required={true}
                id="firstname"
                name="firstname"
                label="First Name"
                value={formState.firstname}
                onChange={inputChange}
                variant="filled"
              />
            </FormControl>
            <FormControl required>
              <TextField
                autoFocus
                required={true}
                id="lastname"
                name="lastname"
                label="Last Name"
                value={formState.lastname}
                onChange={inputChange}
                variant="filled"
              />
            </FormControl>
            <FormControl required>
              <TextField
                autoFocus
                required={true}
                id="username"
                name="username"
                label="Username"
                value={formState.username}
                onChange={inputChange}
                variant="filled"
              />
            </FormControl>
            <FormControl required>
              <TextField
                id="password"
                name="password"
                label="Password"
                value={formState.password}
                onChange={inputChange}
                variant="filled"
                type="password"
                required={true}
              />
            </FormControl>
            <CardActions>
              <Button type="submit" size="small">
                Submit
              </Button>
            </CardActions>
            <br />
            <Typography style={{ marginLeft: '6%' }}>
              Already a member?
            </Typography>
            <Link to="/login">
              <Button>Login here</Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
