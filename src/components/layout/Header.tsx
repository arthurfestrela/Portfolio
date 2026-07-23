import { useClock } from '@/hooks/useClock'

// 21st.dev: candidato natural para uma navbar pronta (ex.: "Navbar" / "Floating Navbar").
// Se substituir, preserve os anchors (#work, #tech, #ai, #about, #contact) e o
// `mix-blend-mode: difference` que faz o nav ficar legível sobre qualquer seção.
export function Header() {
  const time = useClock()

  return (
    <nav>
      <a href="#hero" className="logo" aria-label="Início">
        <span className="name">ARTHUR.E</span>
        <span className="sub">ESTRELA — DEV</span>
      </a>
      <div className="links">
        <a href="#work">Projetos</a>
        <a href="#tech">Stack</a>
        <a href="#ai">IA</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
        <span className="clock">{time}</span>
      </div>
    </nav>
  )
}
