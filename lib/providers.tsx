"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

export default function Providers({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: "http://localhost:9002/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
