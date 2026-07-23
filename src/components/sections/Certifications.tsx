import type { CSSProperties } from 'react'
import { certs, type Cert } from '@/data/certs'
import { useReveal } from '@/hooks/useReveal'

export function Certifications() {
  return (
    <section id="certs">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="sector mono">S.05 — Formação</span>
          <h2 className="display">
            Certifi<span className="outline">cados</span>
          </h2>
        </div>
        <div className="certs-grid">
          {certs.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
          <CertSlot delay="0.08s" />
          <CertSlot delay="0.16s" />
        </div>
      </div>
    </section>
  )
}

function CertCard({ cert }: { cert: Cert }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="cert reveal">
      <div className="langs">
        {cert.langs.map((lang) => (
          <span key={lang.name} className="lang-tag" style={{ color: lang.color }}>
            {lang.name}
          </span>
        ))}
      </div>
      <h3>{cert.title}</h3>
      <p className="meta">
        O curso completo — Instrutor: <b>{cert.instructor}</b>
      </p>
      <div>
        <div className="bar-row">
          <span className="mono" style={{ color: 'var(--faint)' }}>
            Conclusão
          </span>
          <span className="pct">{cert.percent}%</span>
        </div>
        <div className="bar">
          <i />
        </div>
      </div>
      <div className="tags">
        {cert.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function CertSlot({ delay }: { delay?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="cert slot reveal"
      style={delay ? ({ '--d': delay } as CSSProperties) : undefined}
    >
      <span className="plus">+</span>
      <p className="mono">Próximo certificado</p>
    </div>
  )
}
