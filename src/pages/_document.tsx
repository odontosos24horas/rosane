import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Dr. Rosane Lage. Tratamento odontológico especializado em endodontia com microscopia operatória no bairro Funcionários, Belo Horizonte."
          />
          <meta
            name="keywords"
            content="implantes em BH, periodontia BH, implante dentário, implantes dentários BH, tratamento de canal com microscópio, tratamento de canal complexo, dor de dente, canal de dente, dentista de canal"
          />
          <link rel="icon" href="/favicon.png" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-PPHPCBH" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-PPHPCBH');
            `
            }}
          /> */}
        </Head>
        <body>
          {/* <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPHPCBH"
              height="0" width="0">
            </iframe>
          </noscript> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
