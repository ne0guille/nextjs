import { useContext } from 'react';
import { gql, useMutation } from '@apollo/client';

import { SignUpForm } from '../components/SignUpForm';
import { UserContext } from '../user/UserContext';

export const SIGN_UP_USER = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name,email: $email, password: $password) {
      token,
      user {
        id
      }
    }
  }
`;

export default function SignUp() {
  const {processLogin} = useContext(UserContext);
  const [signup, { loading, error }] = useMutation(
    SIGN_UP_USER,
    {
      onCompleted({ signup }) {
        processLogin(signup)
      }
    }
  );

  if (loading) return <p>LOADING</p>
  if (error) return <p>An error occurred</p>;

  return <SignUpForm loading={loading} error={error} onSignUp={signup} />
}