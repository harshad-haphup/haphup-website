import '@/styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="canonical" href="https://haphup.com/"/>
      <title>Expert React.js, Node.js &amp; Ruby on Rails Consulting Company | Haphup</title>
      <meta name="robots" content="index,follow"/>
      <meta name="googlebot" content="index,follow"/>
      <meta name="description" content="Haphup is a React, Node, Ruby on Rails consulting company based in Pune, India. We build web and mobile applications using React, React Native, Node &amp; Ruby on Rails"/>
      <link rel="shortcut icon" href="favicon2.ico"/>
      <noscript data-n-css=""></noscript>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
