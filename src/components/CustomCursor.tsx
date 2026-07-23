import { useCustomCursor } from '@/hooks/useCustomCursor'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CustomCursor() {
  const reducedMotion = useReducedMotion()
  const { dotRef, ringRef } = useCustomCursor(reducedMotion)

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
