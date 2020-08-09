import React, { useEffect, useState, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../src/config/apollo/apolloClient'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import NextNprogress from 'nextjs-progressbar'
// import * as Sentry from '@sentry/node';
import theme from '../src/styles/theme'
import Context from '../src/context'
// import { SuperUserMenu, AdminMenu } from '../src/modules/core/components/Layout/menu'
import { context as contextType } from '../src/context/interface'
// import { NextPageContext } from 'next'
// import nextCookie from 'next-cookies'
import SnackBar from '../src/modules/core/components/SnackBar/SnackBar'
// import { snackMessage as  } from '../src/modules/interfaces'
import RTL from '../src/styles/rtl'
import { snackMessage as snackMessageType } from '../src/modules/core/components/SnackBar/label'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'

// import { addToCookie } from '../src/utilities/storageFunc'

// Sentry.init({
//   enabled: process.env.NODE_ENV === 'production',
//   dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
// })

const App = (props: AppProps): ReactNode => {
  const { Component, pageProps } = props
  const apolloClient = useApollo(pageProps?.initialApolloState)

  const [snackMessage, setSnackMessage] = useState<snackMessageType>({
    snackOpen: false,
    message: '',
    type: '',
  })

  const contextValue: contextType = {
    lang: 'en',
    snackMessage: snackMessage,
    setSnackMessage: (message: snackMessageType) => {
      setSnackMessage(message)
    },
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <RTL>
        <ApolloProvider client={apolloClient}>
          <Context.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
              <SnackBar />
              <CssBaseline />
              <Component {...pageProps} />
              <NextNprogress
                color="#0189e6"
                height="3"
                options={{
                  showSpinner: false,
                }}
              />
            </ThemeProvider>
          </Context.Provider>
        </ApolloProvider>
      </RTL>
      <style jsx global>
        {`
          * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
          }

          body {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            color: #333333;
            overflow-y: none;
            overflow-x: none;
            font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
          }
          .slick-slider {
            // border: 2px solid red;
            display: flex;
            flex-direction: column;
          }
          .slick-list {
            height: 400px;
            width: 100%;
            // border: 2px solid green;
          }
          .slick-dots {
            position: relative;
            bottom: 0px;
            // border: 2px solid blue;
            display: flex !important;
            flex-direction: row;
            justify-content: flex-start;
          }
          .slick-dots > li {
            height: 50px !important;
            width: 50px;
          }
          // .slick-dots > li > img {
          //   border: 1px solid red;
          // }
        `}
      </style>
    </React.Fragment>
  )
}

export default App
