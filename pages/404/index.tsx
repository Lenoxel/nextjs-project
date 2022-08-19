import type { NextPage } from 'next';
import Link from '../../src/components/Link';

const Faq: NextPage = () => {
  return (
    <div>
      <h1>Você se perdeu e caiu na página 404...</h1>
      <Link href="/">
        <a>Ir para a Home</a>
      </Link>
    </div>
  )
};

export default Faq;