import { Marquee } from '@/components/Marquee'
import { techs, type Tech } from '@/data/techs'
import { useReveal } from '@/hooks/useReveal'

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className="tech-card">
      <img
        src={tech.icon}
        alt={tech.name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      <span>{tech.name}</span>
    </div>
  )
}

export function TechStack() {
  const reversed = [...techs].reverse()
  const headRef = useReveal<HTMLDivElement>()

  return (
    <section id="tech">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="sector mono">S.02 — Stack</span>
          <h2 className="display">
            Tecno<span className="outline">logias</span>
          </h2>
        </div>
      </div>
      <div className="tech-rail">
        <Marquee
          trackClassName="tech-track"
          items={techs}
          renderItem={(tech, key) => <TechCard key={key} tech={tech} />}
        />
      </div>
      <div className="tech-rail">
        <Marquee
          trackClassName="tech-track reverse"
          items={reversed}
          renderItem={(tech, key) => <TechCard key={key} tech={tech} />}
        />
      </div>
    </section>
  )
}
