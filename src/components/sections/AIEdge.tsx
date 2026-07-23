import type { CSSProperties } from 'react'
import { useReveal } from '@/hooks/useReveal'

interface AICardData {
  num: string
  title: string
  description: string
  term: { prefix: string; text: string }
  delay?: string
}

const cards: AICardData[] = [
  {
    num: '/01',
    title: 'Claude Code no terminal',
    description:
      'Desenvolvimento direto no repositório: refatorações, migrações e features implementadas com revisão de cada mudança antes do commit.',
    term: { prefix: '$', text: 'claude — plan, implement, test, commit' },
  },
  {
    num: '/02',
    title: 'Agentes & automação',
    description:
      'Fluxos com agentes para tarefas repetitivas — geração de código, testes e integrações — mantendo o controle humano sobre as decisões de produto.',
    term: { prefix: '>', text: 'agentes + MCP + pipelines' },
    delay: '0.08s',
  },
  {
    num: '/03',
    title: 'Da ideia ao deploy',
    description:
      'Ciclo completo: validação, protótipo, MVP e produção. Os SaaS deste portfólio nascem e evoluem dentro desse fluxo acelerado.',
    term: { prefix: '#', text: 'prototype → mvp → production' },
    delay: '0.16s',
  },
]

export function AIEdge() {
  const headRef = useReveal<HTMLDivElement>()
  const leadRef = useReveal<HTMLParagraphElement>()

  return (
    <section id="ai">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="sector mono">S.03 — Diferencial</span>
          <h2 className="display">
            Engenharia <span className="outline">com IA</span>
          </h2>
        </div>
        <p ref={leadRef} className="lead reveal">
          Não uso IA como atalho — uso como <em>ferramenta de engenharia</em>. Domino o Claude
          Code e fluxos de desenvolvimento com agentes, o que me permite entregar em dias o que
          levaria semanas, sem abrir mão de arquitetura e qualidade de código.
        </p>
        <div className="ai-grid">
          {cards.map((card) => (
            <AICard key={card.num} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AICard({ card }: { card: AICardData }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="ai-card reveal"
      style={card.delay ? ({ '--d': card.delay } as CSSProperties) : undefined}
    >
      <span className="num">{card.num}</span>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <span className="term">
        <b>{card.term.prefix}</b> {card.term.text}
      </span>
    </div>
  )
}
