import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'

type Props = {
  title?: string
  description?: string
  nextSocialNetwork?: string
}

const NextLayout = ({
  children,
  title = 'Dr. Rosane Lage',
  description = 'Dr. Rosane Lage. Tratamento odontológico especializado em endodontia com microscopia operatória no bairro Funcionários, Belo Horizonte.',
  nextSocialNetwork = 'https://api.whatsapp.com/send?phone=553196890301&text=Ol%C3%A1,%20Dra.%20Rosane.'
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NextHeader />
      <main>{children}</main>
      <NextFooter />
      <Box position="fixed" width="60px" height="60px" zIndex={100} bottom="20px" right="20px">
        <Link href={nextSocialNetwork}>
          <a target="_blank" rel="noreferrer">
            <NextWhatsIcon />
          </a>
        </Link>
      </Box>
    </>
  )
}

export default NextLayout
