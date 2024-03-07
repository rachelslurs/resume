import type { AppProps } from 'next/app'
import { getCookie } from 'cookies-next'

export default function App({ Component, pageProps }: AppProps) {
  console.log('pageProps', pageProps)
  return (
    <Component {...pageProps} />
  )
}

App.getInitialProps = ({ req, res }) => ({
  colorScheme: getCookie('theme', { req, res })
})