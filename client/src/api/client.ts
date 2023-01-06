import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql'
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default client
