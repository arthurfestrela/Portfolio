import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type BootPhase = 'booting' | 'done' | 'removed'

/** Tela de abertura + marca `body.ready`, usada pela animação de entrada do Hero. */
export function BootScreen() {
  const reducedMotion = useReducedMotion()
  const [phase, setPhase] = useState<BootPhase>(reducedMotion ? 'removed' : 'booting')

  useEffect(() => {
    document.body.classList.toggle('ready', phase !== 'booting')
  }, [phase])

  useEffect(() => {
    if (reducedMotion || phase !== 'booting') return
    const timer = setTimeout(() => setPhase('done'), 1050)
    return () => clearTimeout(timer)
  }, [reducedMotion, phase])

  useEffect(() => {
    if (phase !== 'done') return
    const timer = setTimeout(() => setPhase('removed'), 900)
    return () => clearTimeout(timer)
  }, [phase])

  if (phase === 'removed') return null

  return (
    <div id="boot" className={phase === 'done' ? 'done' : undefined} aria-hidden="true">
      <div className="display">ARTHUR ESTRELA</div>
      <div className="boot-line" />
      <div className="mono">Portfólio — 2026</div>
    </div>
  )
}
