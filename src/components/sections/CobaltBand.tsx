import { Marquee } from '@/components/Marquee'

const BAND_ITEMS = [
  'Disponível para projetos',
  'Full Stack',
  'React',
  'TypeScript',
  'Node.js',
  'UI Engineering',
  'SaaS',
  'Engenharia com IA',
]

export function CobaltBand() {
  return (
    <div className="band" aria-hidden="true">
      <Marquee
        trackClassName="band-track"
        items={BAND_ITEMS}
        renderItem={(text, key) => (
          <span key={key}>
            {text}
            <i>◆</i>
          </span>
        )}
      />
    </div>
  )
}
