import React, { PropsWithChildren } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Box } from '@chakra-ui/react'

import { SITE_URL, WHATSAPP_URL, jsonLdNegocio } from '../../../data/site'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'
import NextFooter from '../../organisms/nextFooter'
import NextHeader from '../../organisms/nextHeader'

type Props = {
  title?: string
  description?: string
  nextSocialNetwork?: string
}

const NextLayout = ({
  children,
  title = 'Dra. Rosane Lage | Endodontia com microscopia em Belo Horizonte',
  description = 'Dra. Rosane Lage. Tratamento odontológico especializado em endodontia com microscopia operatória no bairro Funcionários, Belo Horizonte.',
  nextSocialNetwork = WHATSAPP_URL
}: PropsWithChildren<Props>) => {
  const { asPath } = useRouter()
  // Sem query string nem âncora: canonical aponta sempre para o caminho puro.
  const canonical = `${SITE_URL}${asPath.split(/[#?]/)[0]}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <script
          type="application/ld+json"
          // Conteúdo estático definido em src/data/site.ts — sem entrada de usuário.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNegocio) }}
        />
      </Head>
      <NextHeader />
      <main>{children}</main>
      <NextFooter />
      <Box
        position="fixed"
        width="60px"
        height="60px"
        zIndex={100}
        bottom="20px"
        right="20px"
      >
        <Link href={nextSocialNetwork}>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Falar com a Dra. Rosane pelo WhatsApp"
          >
            <NextWhatsIcon />
          </a>
        </Link>
      </Box>
    </>
  )
}

export default NextLayout
