import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField/TextField';
import { useMutation } from "react-apollo";
import { gql } from 'apollo-boost';
import './LogInPage.scss';
import { setTokenInLS } from '../../helpers/local-storage.helper';

const LOGIN = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth (username: $username, password: $password){
      token
    }
  }
`;

function LogInPage( props: any) {
  const [loginMutation, { data }] = useMutation(LOGIN)

  const logIn = () => {
    loginMutation({ variables: { username: "Agniesz Buttonidas",  password: "tralala" } })
  }

  useEffect(() => {
    if(!!data) {
      console.log(data);
      const token = data.tokenAuth.token;
      setTokenInLS(token);
      props.history.push('/training')
    }
  }, [data])

  return (
    <div className="LogInPage">
      <div className="button-container">
        <div className="button-container-element">
          <form noValidate autoComplete="off" className="login-form">
            <TextField 
              fullWidth
              id="name-input"
              label="Name" 
              margin="normal"
              variant="outlined" 
              />
            <TextField
              fullWidth
              label="Password" 
              margin="normal"
              variant="outlined"
              id="password-input"
              type="password"
            />
          </form>
        </div>
        <div className="button-container-element">
          <Button size='large' fullWidth onClick={logIn} variant="outlined">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
