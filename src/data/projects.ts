export interface ProjectBadge {
  label: string
  hot?: boolean
}

export interface ProjectLink {
  label: string
  href?: string
  soft?: boolean
}

export interface Project {
  index: string
  glyph: string
  title: string
  description: string
  badges: ProjectBadge[]
  stack: string[]
  links: ProjectLink[]
  href?: string
  span: 5 | 7
  delay?: string
}

export const projects: Project[] = [
  {
    index: 'P.01',
    glyph: 'H.',
    title: 'Horinha',
    description:
      'Plataforma de agendamento + CRM para pequenos negócios de serviço. O cliente agenda sozinho, o dono recebe lembretes automáticos e acompanha o faturamento — sem WhatsApp, sem caderno.',
    badges: [{ label: 'Em desenvolvimento', hot: true }, { label: 'SaaS' }],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
    links: [
      { label: 'Ver no GitHub', href: 'https://github.com/arthurfestrela/Horinha.App' },
      { label: 'horinha.app — em breve', soft: true },
    ],
    href: 'https://github.com/arthurfestrela/Horinha.App',
    span: 7,
  },
  {
    index: 'P.02',
    glyph: 'YT',
    title: 'Aluguel de Iates',
    description:
      'Plataforma de aluguel de iates — UI/UX e desenvolvimento web com foco em experiência premium.',
    badges: [{ label: 'Web / UI' }],
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [
      {
        label: 'Ver no GitHub',
        href: 'https://github.com/arthurfestrela/Projeto-AluguelIates',
      },
    ],
    href: 'https://github.com/arthurfestrela/Projeto-AluguelIates',
    span: 5,
    delay: '0.08s',
  },
  {
    index: 'P.03',
    glyph: 'SN',
    title: 'Sensei',
    description:
      'Sistema full stack em Java com lógica orientada a objetos, construído em colaboração.',
    badges: [{ label: 'Java' }],
    stack: ['Java', 'POO'],
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/raulcabralc/sensei-java' }],
    href: 'https://github.com/raulcabralc/sensei-java',
    span: 5,
  },
  {
    index: 'P.04',
    glyph: 'EQ',
    title: 'Estoquei.ia',
    description:
      'Gestão de estoque inteligente para pequenos comércios: importação de NF-e, movimentações e relatórios — construído com fluxo de desenvolvimento assistido por IA.',
    badges: [{ label: 'Em desenvolvimento', hot: true }, { label: 'SaaS + IA' }],
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    links: [{ label: 'Lançamento em breve', soft: true }],
    span: 7,
    delay: '0.08s',
  },
]
