/* eslint-disable @next/next/no-page-custom-font */
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() { // eslint-disable-line class-methods-use-this
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="description" content="Aplicação para perguntas e respostas em tempo real" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;500&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
