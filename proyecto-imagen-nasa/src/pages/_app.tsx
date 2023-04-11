import '@next-js-bootcamp/styles/globals.css'
import Layout from '@next-js-bootcamp/components/Layout'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
