import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import GlobalStyle from '../src/theme/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Layout>
  )
};

export default MyApp;
