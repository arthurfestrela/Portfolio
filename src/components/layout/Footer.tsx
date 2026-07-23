import { useClock } from '@/hooks/useClock'

export function Footer() {
  const time = useClock()

  return (
    <div className="footer-bottom">
      <span className="mono">© 2026 Arthur Estrela</span>
      <span className="mono">BA, Brasil — {time}</span>
      <a href="#hero" className="top mono">
        Voltar ao topo ↑
      </a>
    </div>
  )
}
