import type { ReactNode } from 'react'

interface MarqueeProps<T> {
  items: T[]
  renderItem: (item: T, key: string) => ReactNode
  trackClassName: string
}

/** Duplica a lista de itens para um loop de scroll infinito (via CSS animation). */
export function Marquee<T>({ items, renderItem, trackClassName }: MarqueeProps<T>) {
  return (
    <div className={trackClassName}>
      {items.map((item, i) => renderItem(item, `a-${i}`))}
      {items.map((item, i) => renderItem(item, `b-${i}`))}
    </div>
  )
}
