import type { NextPage } from "next";
import Link from "../../src/components/Link";

const Faq: NextPage = () => {
  return (
    <div>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href="/">
        <a>Ir para a Home</a>
      </Link>
    </div>
  )
};

export default Faq;