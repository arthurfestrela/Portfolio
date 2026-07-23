import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, .project, .field input, .field textarea'

function isHoverTarget(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(HOVER_SELECTOR) !== null
}

/** Réplica do cursor customizado (ponto + anel) com easing via rAF. */
export function useCustomCursor(reducedMotion: boolean) {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -100
    let my = -100
    let rx = -100
    let ry = -100
    let frame = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    document.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`
      ring.style.transform = `translate(${rx - ring.offsetWidth / 2}px, ${ry - ring.offsetHeight / 2}px)`
      frame = requestAnimationFrame(animate)
    }
    if (!reducedMotion) {
      frame = requestAnimationFrame(animate)
    }

    const onMouseOver = (e: MouseEvent) => {
      if (isHoverTarget(e.target)) ring.classList.add('hovering')
    }
    const onMouseOut = (e: MouseEvent) => {
      if (isHoverTarget(e.target)) ring.classList.remove('hovering')
    }
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reducedMotion])

  return { dotRef, ringRef }
}
