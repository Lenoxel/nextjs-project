import Head from 'next/head'
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
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