import React from 'react'

const Error = ({ statusCode }) => {
  return (
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

// import NextErrorComponent  from 'next/error'
// import * as Sentry from '@sentry/node'

// const MyError = ({ statusCode, hasGetInitialPropsRun, err }: any) => {
//   if (!hasGetInitialPropsRun && err) {
//     Sentry.captureException(err)
//   }

//   return <NextErrorComponent statusCode={statusCode} />
// }

// MyError.getInitialProps = async ({ res, err, asPath }: any) => {
//   const errorInitialProps = await NextErrorComponent.getInitialProps({
//     res,
//     err,
//   })

//   errorInitialProps.hasGetInitialPropsRun = true

//   if (res?.statusCode === 404) {
//     return { statusCode: 404 }
//   }
//   if (err) {
//     Sentry.captureException(err)
//     return errorInitialProps
//   }

//   Sentry.captureException(
//     new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
//   )

//   return errorInitialProps
// }

// export default MyError
