import Head from 'next/head'
import Script from 'next/script';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=328704946"></Script>
      <Script id='myScript' dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '328704946');
            `
        }}
      />

      {/* </Script> */}

      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <title>My App</title>
      </Head>
      <main>{children}</main>
      <style jsx>{`
        main {
          display: flex;
          height: calc(100vh - 64px);
          background-color: white;
        }

        main > section {
          padding: 32px;
        }
      `}</style>
    </>
  )
};

export default Layout;