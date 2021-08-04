import "tailwindcss/tailwind.css";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { UserContextProvider } from "../user/UserContext";
import AppWrapper from '../components/App';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <UserContextProvider>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </UserContextProvider>
    </ApolloProvider>
  );
}
