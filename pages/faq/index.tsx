import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { httpClient } from "../../src/main";

type Item = {
  answer: string;
  question: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

  const faq: Item[] = await httpClient.get(FAQ_API_URL).then((data) => {
    return data;
  });

  return {
    props: {
      faq,
    },
  }
}

const Faq: NextPage = ({ faq }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <ul>
        {(faq as Item[]).map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Faq;