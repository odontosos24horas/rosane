import React from 'react'

import NextTemplateTreatments from '../components/templates/nextTemplateTreatments'

import { SEO } from '../data/seo'
import { treatmentsItems } from '../data/treatments'

export default function NextAgreements() {
  return (
    <NextTemplateTreatments
      seo={SEO.tratamentos}
      nextTechnologyItems={treatmentsItems}
      title="Tratamentos endodônticos"
      numberGrid={[1, 2]}
    />
  )
}
