import { useReveal } from '@/hooks/useReveal'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from './ContactForm'

// 21st.dev: se quiser trocar o formulário por um componente pronto (ex.: "Contact Form"),
// mantenha `submitContactForm` em src/lib/contact.ts como camada de envio.
export function Contact() {
  const statusRef = useReveal<HTMLDivElement>()
  const headingRef = useReveal<HTMLHeadingElement>()
  const infoRef = useReveal<HTMLDivElement>()

  return (
    <footer id="contact">
      <div className="wrap">
        <div ref={statusRef} className="status reveal">
          <span className="dot" />
          <span className="mono">Disponível para projetos</span>
        </div>
        <h2 ref={headingRef} className="display giant reveal">
          Vamos criar
          <br />
          <span className="alt">juntos?</span>
        </h2>
        <div className="contact-grid">
          <div ref={infoRef} className="contact-info reveal">
            <p>
              Tem um projeto em mente? Me manda uma mensagem ou entre em contato direto pelo
              e-mail. Respondo em até 24h.
            </p>
            <a href="mailto:arthurfestrela@gmail.com" className="email-link">
              arthurfestrela@gmail.com
            </a>
            <div className="socials">
              <a href="https://www.instagram.com/arthurfestrela/" target="_blank" rel="noopener">
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/arthur-estrela-56a571316/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a href="https://github.com/arthurfestrela" target="_blank" rel="noopener">
                GitHub
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
        <Footer />
      </div>
    </footer>
  )
}
