import '@next-js-bootcamp/styles/globals.css'
import Layout from '@next-js-bootcamp/components/Layout'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '500'],
    subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
