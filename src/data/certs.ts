export interface CertLang {
  name: string
  color: string
}

export interface Cert {
  langs: CertLang[]
  title: string
  metaPrefix: string
  metaLabel: string
  metaValue: string
  percent: number
  progressLabel: string
  tags: string[]
  href?: string
}

export const certs: Cert[] = [
  {
    langs: [
      { name: 'Python', color: '#3572A5' },
      { name: 'Java', color: '#b07219' },
      { name: 'C / C++', color: '#f34b7d' },
      { name: 'C#', color: '#00758f' },
    ],
    title: 'Algoritmos e Lógica de Programação',
    metaPrefix: 'O curso completo',
    metaLabel: 'Instrutor',
    metaValue: 'Nelio Alves',
    percent: 100,
    progressLabel: 'Conclusão',
    tags: ['Lógica', 'Algoritmos', 'Python', 'Java', 'C++'],
  },
  {
    langs: [],
    title: 'Sistemas de Informação',
    metaPrefix: 'Graduação em andamento',
    metaLabel: 'Instituição',
    metaValue: 'IFBA — Instituto Federal de Educação, Ciência e Tecnologia da Bahia',
    percent: 40,
    progressLabel: 'Em andamento',
    tags: ['Sistemas de Informação', 'Engenharia de Software', 'Banco de Dados'],
  },
  {
    langs: [],
    title: 'AI Fundamentals',
    metaPrefix: 'O curso completo',
    metaLabel: 'Instituição',
    metaValue: 'Google (via Coursera)',
    percent: 100,
    progressLabel: 'Conclusão',
    tags: ['Inteligência Artificial', 'IA', 'Fundamentos'],
    href: 'https://coursera.org/share/a3c372f2d75fbf0d21a025eb14af9ea6',
  },
  {
    langs: [],
    title: 'Introduction to Front-End Development',
    metaPrefix: 'O curso completo',
    metaLabel: 'Instituição',
    metaValue: 'Meta (via Coursera)',
    percent: 100,
    progressLabel: 'Conclusão',
    tags: ['HTML', 'CSS', 'Front-End Development'],
    href: 'https://coursera.org/share/346b78fd77eb1eeaf8f14917b1451d72',
  },
]
