import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const AUTH_USER = gql`
  query me {
    me {
      id,
      username
    }
  }
`;


export const ProtectedRoute = (props: any) => {
  const { component: Component, ...rest } = props
  const { loading, error, data } = useQuery(AUTH_USER);

  useEffect(() => {
    console.log(data);
    if(!!data) {
      console.log(data);
    }
  }, [data])

  if (loading) return null;
  if (error) return <Redirect to='/login' />;

  return (
    <Route {...rest} render={(props) => (
       <Component {...props} />
    )} />
  )
}

