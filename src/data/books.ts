export interface Book {
  title: string
  author: string
  publisher: string
  href: string
  cover: string
}

export const books: Book[] = [
  {
    title: 'Entendendo Algoritmos',
    author: 'Aditya Y. Bhargava',
    publisher: 'Novatec',
    href: 'https://novatec.com.br/livros/entendendo-algoritmos/',
    cover: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575225639.jpg',
  },
  {
    title: 'Indo Além da Vibe Coding',
    author: 'Addy Osmani',
    publisher: 'Novatec',
    href: 'https://novatec.com.br/livros/indo-alem-da-vibe-coding/',
    // A capa ampliada oficial (capa-ampliada-9788575229781.jpg, linkada na própria
    // página do livro) retorna 403 no bucket S3 da Novatec — provavelmente ainda não
    // foi publicada para este título. Usando a capa 1000x1000 da Livraria Martins
    // Fontes como fonte alternativa de alta resolução.
    cover: 'https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1766893-1000-1000/1189954.jpg',
  },
  {
    title: 'Entendendo Estruturas de Dados',
    author: 'Marcello La Rocca',
    publisher: 'Novatec',
    href: 'https://novatec.com.br/livros/entendendo-estruturas-de-dados/',
    cover: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575229316.jpg',
  },
]
