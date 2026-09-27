import React from 'react'

import NextTemplateTreatments from '../components/templates/nextTemplateTreatments'

import { SEO } from '../data/seo'
import { videos } from '../data/videos'

export default function NextTreatments() {
  return (
    <NextTemplateTreatments
      seo={SEO.videos}
      nextTechnologyItems={videos}
      title="Vídeos"
      numberGrid={[2]}
    />
  )
}
