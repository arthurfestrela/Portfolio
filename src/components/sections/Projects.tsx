import type { ElementType, CSSProperties } from 'react'
import { projects, type Project } from '@/data/projects'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useProjectCard } from '@/hooks/useProjectCard'

// 21st.dev: candidato para cards de projeto prontos (ex.: "Project Card" / "Bento Grid").
// Se substituir, mantenha `src/data/projects.ts` como fonte dos dados — é o único
// lugar que precisa mudar ao adicionar/remover um projeto.
export function Projects() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="sector mono">S.01 — Projetos</span>
          <h2 className="display">
            Trabalhos <span className="outline">selecionados</span>
          </h2>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} reducedMotion={reducedMotion} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  reducedMotion,
}: {
  project: Project
  reducedMotion: boolean
}) {
  const ref = useProjectCard<HTMLElement>(reducedMotion)
  const Tag = (project.href ? 'a' : 'div') as ElementType
  const style = project.delay ? ({ '--d': project.delay } as CSSProperties) : undefined

  return (
    <Tag
      ref={ref}
      {...(project.href ? { href: project.href, target: '_blank', rel: 'noopener' } : {})}
      className={`project span-${project.span} reveal`}
      style={style}
    >
      <span className="glyph">{project.glyph}</span>
      <div className="top">
        <span className="idx">{project.index}</span>
        <div className="badges">
          {project.badges.map((badge) => (
            <span key={badge.label} className={`badge${badge.hot ? ' hot' : ''}`}>
              {badge.label}
            </span>
          ))}
        </div>
      </div>
      <div className="bottom">
        <h3>{project.title}</h3>
        <p className="desc">{project.description}</p>
        <div className="stack">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="links">
          {project.links.map((link) => {
            if (link.soft) {
              return (
                <span key={link.label} className="link soft">
                  {link.label}
                </span>
              )
            }
            return (
              <span key={link.label} className="link">
                {link.label}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            )
          })}
        </div>
      </div>
    </Tag>
  )
}
