import Head from 'next/head'
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Meu App Next.js</title>
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