import type { NextPage } from 'next';
import Link from '../src/components/Link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Alura Cases - Home Page</h1>
      <Link href='/faq'>
        Ir para a página do FAQ
      </Link>
    </div>
  )
};

export default Home;
