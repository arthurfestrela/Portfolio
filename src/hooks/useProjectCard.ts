import { useEffect, useRef } from 'react'

/** Reveal ao rolar + tilt 3D sutil ao mouse, combinados no mesmo card de projeto. */
export function useProjectCard<T extends HTMLElement>(reducedMotion: boolean) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion || !window.matchMedia('(pointer: fine)').matches) return

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `translateY(-6px) rotateX(${py * -3}deg) rotateY(${px * 3}deg)`
      el.style.transition = 'transform 0.1s linear, border-color 0.4s, background 0.4s'
    }
    const onLeave = () => {
      el.style.transform = ''
      el.style.transition = ''
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [reducedMotion])

  return ref
}
