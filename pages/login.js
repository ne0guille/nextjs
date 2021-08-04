import { gql, useMutation } from '@apollo/client';
import { useContext } from 'react';

import { LoginForm } from '../components/LoginForm';
import { UserContext } from '../user/UserContext';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export default function Login() {
  const {processLogin} = useContext(UserContext);
  const [login, { loading, error }] = useMutation(
    LOGIN_USER,
    {
      onCompleted({ login = {} }) {
        processLogin(login)                            
      }
    }
  );

  return (
      <LoginForm loading={loading} error={error} onLogin={login} />
  )
}
