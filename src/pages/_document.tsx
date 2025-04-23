import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { type ReactElement } from 'react';

class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="description" content="Aplicação para perguntas e respostas em tempo real" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;500&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
