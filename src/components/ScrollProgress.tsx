import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()
  return <div id="progress" style={{ transform: `scaleX(${progress})` }} />
}
