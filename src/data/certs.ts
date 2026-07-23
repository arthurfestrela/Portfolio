export interface CertLang {
  name: string
  color: string
}

export interface Cert {
  langs: CertLang[]
  title: string
  instructor: string
  percent: number
  tags: string[]
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
    instructor: 'Nelio Alves',
    percent: 100,
    tags: ['Lógica', 'Algoritmos', 'Python', 'Java', 'C++'],
  },
]
