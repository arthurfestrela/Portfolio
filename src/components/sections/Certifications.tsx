import type { CSSProperties, ElementType } from 'react'
import { certs, type Cert } from '@/data/certs'
import { books, type Book } from '@/data/books'
import { useReveal } from '@/hooks/useReveal'

export function Certifications() {
  const headRef = useReveal<HTMLDivElement>()
  const readsHeadRef = useReveal<HTMLDivElement>()

  return (
    <section id="certs">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="sector mono">S.05 — Formação</span>
          <h2 className="display">
            Certifi<span className="outline">cados</span>
          </h2>
        </div>
        <div className="certs-grid">
          {certs.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>

        <div ref={readsHeadRef} className="reads-head reveal">
          <span className="sector mono">Leituras</span>
          <h3>Livros lidos</h3>
        </div>
        <div className="books-grid">
          {books.map((book, i) => (
            <BookCard key={book.title} book={book} delay={i > 0 ? `${i * 0.08}s` : undefined} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertCard({ cert }: { cert: Cert }) {
  const ref = useReveal<HTMLElement>()
  const Tag = (cert.href ? 'a' : 'div') as ElementType

  return (
    <Tag
      ref={ref}
      {...(cert.href ? { href: cert.href, target: '_blank', rel: 'noopener' } : {})}
      className="cert reveal"
    >
      <div className="langs">
        {cert.langs.map((lang) => (
          <span key={lang.name} className="lang-tag" style={{ color: lang.color }}>
            {lang.name}
          </span>
        ))}
      </div>
      <h3>{cert.title}</h3>
      <p className="meta">
        {cert.metaPrefix} — {cert.metaLabel}: <b>{cert.metaValue}</b>
      </p>
      <div>
        <div className="bar-row">
          <span className="mono" style={{ color: 'var(--faint)' }}>
            {cert.progressLabel}
          </span>
          <span className="pct">{cert.percent}%</span>
        </div>
        <div className="bar">
          <i style={{ '--bar-fill': `${cert.percent}%` } as CSSProperties} />
        </div>
      </div>
      <div className="tags">
        {cert.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {cert.href && (
        <span className="link">
          Ver certificado
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      )}
    </Tag>
  )
}

function BookCard({ book, delay }: { book: Book; delay?: string }) {
  const ref = useReveal<HTMLAnchorElement>()
  return (
    <a
      ref={ref}
      href={book.href}
      target="_blank"
      rel="noopener"
      className="book reveal"
      style={delay ? ({ '--d': delay } as CSSProperties) : undefined}
    >
      <img
        className="book-cover"
        src={book.cover}
        alt={`Capa do livro ${book.title}`}
        loading="lazy"
        width={400}
        height={600}
      />
      <h3>{book.title}</h3>
      <p className="meta">
        {book.author} — <b>{book.publisher}</b>
      </p>
      <span className="link">
        Ver na Novatec
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </span>
    </a>
  )
}
