import React from 'react'

import Image from 'next/image'

import { Box, Grid, GridItem, Container } from '@chakra-ui/react'

import { SeoMeta } from '../../../data/seo'
import NextDoctoralia from '../../atoms/nextDoctoralia'
import NextAccordionImage, {
  NextAccordionImageProps
} from '../../organisms/nextAccordionImage'
import NextGridListWithHeading from '../../organisms/nextGridListWithHeading'
import NextLayout from '../nextLayout'

export type NextTemplateAboutUs = {
  seo?: SeoMeta
  nextCallToActionItems: NextAccordionImageProps
}

const NextTemplateSpecialties = ({
  nextCallToActionItems,
  seo
}: NextTemplateAboutUs) => {
  return (
    <NextLayout {...seo}>
      {nextCallToActionItems.title === 'Dra. Rosane' && (
        <NextDoctoralia slug="rosane-lage" nome="Rosane Lage" />
      )}
      {nextCallToActionItems.title === 'Dr. Danilo' && (
        <NextDoctoralia slug="danilo-antunes" nome="Danilo Antunes" />
      )}
      <NextAccordionImage
        id={'specialties'}
        title={nextCallToActionItems.title}
        text={nextCallToActionItems.text}
        image={nextCallToActionItems.image}
        imageAlt={nextCallToActionItems.imageAlt}
        textButton={nextCallToActionItems.textButton}
        directionMd={nextCallToActionItems.directionMd}
        width={nextCallToActionItems.width}
        height={nextCallToActionItems.height}
        url={nextCallToActionItems.url}
        content={nextCallToActionItems.content}
        background={nextCallToActionItems.background}
        specialties={nextCallToActionItems.specialties}
      />
      <Box pt={16}>
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem colSpan={2} display={['none', 'block']}>
            <Box>
              <Image
                alt={'Mulher sorrindo e mostrando os dentes'}
                src={'/images/sorriso.jpg'}
                width={551}
                height={1014}
                layout={'responsive'}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={[7, 5]}>
            <Container maxW="3xl">
              <NextGridListWithHeading
                features={nextCallToActionItems.features}
              />
            </Container>
          </GridItem>
        </Grid>
      </Box>
    </NextLayout>
  )
}

export default NextTemplateSpecialties
