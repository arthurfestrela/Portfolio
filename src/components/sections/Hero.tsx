import { useClock } from '@/hooks/useClock'

// 21st.dev: candidato para um "Hero Section" pronto (ex.: com headline animada).
// Se substituir, preserve as âncoras da barra `.hero-data` (base/hora/status) e o
// link `.cta` para #work — eles carregam contexto real (geolocalização + disponibilidade).
export function Hero() {
  const time = useClock()

  return (
    <section id="hero">
      <div className="wrap">
        <p className="eyebrow mono">Full Stack Developer — Bahia, Brasil</p>
        <h1 className="display">
          <span className="line">
            <span>ARTHUR</span>
          </span>
          <span className="line">
            <span className="outline">ESTRELA</span>
          </span>
        </h1>
        <div className="hero-foot">
          <p>
            Construo <strong>produtos SaaS e experiências digitais</strong> que unem estética
            precisa e performance técnica — do primeiro protótipo ao deploy em produção.
          </p>
          <a href="#work" className="cta">
            <span>Ver projetos</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="hero-data">
          <div className="cell">
            <span className="label mono">Base</span>
            <span className="value">14.86°S / 40.84°W — BA, BR</span>
          </div>
          <div className="cell">
            <span className="label mono">Hora local</span>
            <span className="value">{time} GMT-3</span>
          </div>
          <div className="cell">
            <span className="label mono">Status</span>
            <span className="value live">DISPONÍVEL PARA PROJETOS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
