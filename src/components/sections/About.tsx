import type { CSSProperties } from 'react'
import { useReveal } from '@/hooks/useReveal'

const FACTS = [
  { k: 'Base', v: 'Bahia, Brasil' },
  { k: 'Foco', v: 'Web · Front-end · Back-end · Branding' },
  { k: 'Atuação', v: 'Freelancer — clientes ao redor do mundo' },
  { k: 'Agora', v: 'Construindo Horinha & Estoquei.ia' },
]

export function About() {
  const headRef = useReveal<HTMLDivElement>()
  const statementRef = useReveal<HTMLParagraphElement>()
  const factsRef = useReveal<HTMLDivElement>()

  return (
    <section id="about">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="sector mono">S.04 — Sobre</span>
          <h2 className="display">
            Quem <span className="outline">sou</span>
          </h2>
        </div>
        <div className="about-grid">
          <p ref={statementRef} className="statement reveal">
            Me chamo Arthur Estrela e sou um desenvolvedor focado em criar soluções digitais que
            unem <span>estética e performance técnica.</span>
          </p>
          <div ref={factsRef} className="about-facts reveal" style={{ '--d': '0.1s' } as CSSProperties}>
            {FACTS.map((fact) => (
              <div key={fact.k} className="fact">
                <span className="k mono">{fact.k}</span>
                <span className="v">{fact.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
