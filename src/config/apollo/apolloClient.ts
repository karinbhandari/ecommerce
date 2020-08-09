import { useMemo } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { getFromCookie } from '../../utilities/storageFunc'
import { ApolloLink, from } from 'apollo-link'
import { onError } from 'apollo-link-error'

let apolloClient: any

const httpLink = new HttpLink({
  uri: 'http://cmushrif-dev.emushrif.om:5433/graphql', // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  // authenti
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const headers = {
    authorization: getFromCookie('token') !== undefined ? `Bearer ${getFromCookie('token')}` : '',
  }
  if (!headers.authorization) {
    delete headers.authorization
  }
  operation.setContext({
    headers,
    // fetchOptions: {
    //   mode: 'no-cors',
    // },
  })

  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        '%c[GraphQL error]:' + `%cMessage: ${message}, Location: ${locations}, Path: ${path}`,
        'color:red;font-weight: bold;',
        'color:brown;'
      )
    )

  if (networkError)
    console.log(
      '%c[Network error]:' + `%c${networkError}`,
      'color:red;font-weight: bold;',
      'color:blue;'
    )
})

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([authMiddleware, errorLink.concat(httpLink)]),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (initialState: any = null): any => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const useApollo = (initialState: any): any => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
