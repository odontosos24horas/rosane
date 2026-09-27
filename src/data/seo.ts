/**
 * Title e meta description de cada página. Cada rota tem os seus,
 * para o Google não tratar as páginas internas como cópia da home.
 */
export type SeoMeta = {
  title: string
  description: string
}

export const SEO = {
  home: {
    title: 'Tratamento de canal com microscópio em BH | Dra. Rosane Lage',
    description:
      'Dra. Rosane Lage, cirurgiã-dentista (CRO-MG 29.518) especialista em Endodontia. Tratamento de canal com microscopia operatória no Funcionários, em BH.'
  },
  especialidadesRosane: {
    title: 'Endodontista em Belo Horizonte | Dra. Rosane Lage',
    description:
      'Endodontia e microscopia endodôntica com a Dra. Rosane Lage, especialista em Endodontia (CRO-MG 29.518), no bairro Funcionários, em Belo Horizonte.'
  },
  especialidadesDanilo: {
    title: 'Implantes e periodontia | Dr. Danilo Antunes',
    description:
      'O Dr. Danilo Antunes (CRO-MG 27292), especialista em Implantodontia e Periodontia, atende no mesmo consultório da Dra. Rosane Lage, em Belo Horizonte.'
  },
  tratamentos: {
    title: 'Tratamentos endodônticos | Dra. Rosane Lage',
    description:
      'Tratamento e retratamento de canal, endodontia com microscópio, diagnóstico de dor, canais calcificados e preservação de dentes naturais em Belo Horizonte.'
  },
  fotos: {
    title: 'Fotos do consultório | Dra. Rosane Lage',
    description:
      'Conheça o consultório da Dra. Rosane Lage no bairro Funcionários, em Belo Horizonte: recepção, sala de espera e salas de atendimento.'
  },
  videos: {
    title: 'Vídeos | Dra. Rosane Lage',
    description:
      'Vídeos do consultório da Dra. Rosane Lage e do Dr. Danilo Antunes sobre implantes, enxerto ósseo e biossegurança no atendimento odontológico.'
  },
  contato: {
    title: 'Contato e localização | Dra. Rosane Lage',
    description:
      'Telefones, WhatsApp, Instagram e endereço do consultório da Dra. Rosane Lage: Rua Gonçalves Dias, 82, sala 902, Funcionários, Belo Horizonte.'
  },
  privacidade: {
    title: 'Política de Privacidade | Dra. Rosane Lage',
    description:
      'Como o site da Dra. Rosane Lage coleta, usa e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).'
  }
}
