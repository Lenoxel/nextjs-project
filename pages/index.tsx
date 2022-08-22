import type { NextPage } from 'next';
import Link from '../src/components/Link';
import Title from '../src/components/Typography/Title';

const Home: NextPage = () => {
  return (
    <div>
      <Title as="h1">Alura Cases - Home Page</Title>
      <Link href='/faq'>
        Ir para a página do FAQ
      </Link>
    </div>
  )
};

export default Home;
