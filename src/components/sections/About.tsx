import type { CSSProperties } from 'react'
import { Marquee } from '@/components/Marquee'
import { langs, type LangPill } from '@/data/langs'
import { useReveal } from '@/hooks/useReveal'

const FACTS = [
  { k: 'Base', v: 'Bahia, Brasil' },
  { k: 'Foco', v: 'Web · Front-end · Back-end · Branding' },
  { k: 'Atuação', v: 'Freelancer — clientes ao redor do mundo' },
  { k: 'Agora', v: 'Construindo Horinha & Estoquei.ia' },
]

function Pill({ lang }: { lang: LangPill }) {
  return (
    <span className="pill">
      <i style={{ background: lang.color }} />
      {lang.name}
    </span>
  )
}

export function About() {
  const statementRef = useReveal<HTMLParagraphElement>()
  const factsRef = useReveal<HTMLDivElement>()
  const pillRailRef = useReveal<HTMLDivElement>()

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal">
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
        <div ref={pillRailRef} className="pill-rail reveal">
          <Marquee
            trackClassName="pill-track"
            items={langs}
            renderItem={(lang, key) => <Pill key={key} lang={lang} />}
          />
        </div>
      </div>
    </section>
  )
}
