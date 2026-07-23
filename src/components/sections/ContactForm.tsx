import { useRef, useState, type CSSProperties, type FormEvent } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { submitContactForm } from '@/lib/contact'

type SendState = 'idle' | 'sending' | 'sent' | 'error'

const LABELS: Record<SendState, string> = {
  idle: 'Enviar mensagem',
  sending: 'Enviando…',
  sent: 'Enviado',
  error: 'Erro — tente novamente',
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const revealRef = useReveal<HTMLFormElement>()
  const [state, setState] = useState<SendState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    }

    setState('sending')
    try {
      await submitContactForm(data)
      form.reset()
      setState('sent')
      setTimeout(() => setState('idle'), 5000)
    } catch {
      setState('error')
      setTimeout(() => setState('idle'), 3000)
    }
  }

  return (
    <form
      ref={(el) => {
        formRef.current = el
        revealRef.current = el
      }}
      className="reveal"
      style={{ '--d': '0.1s' } as CSSProperties}
      onSubmit={handleSubmit}
    >
      <div className="field">
        <input type="text" name="name" id="f-name" placeholder=" " required />
        <label htmlFor="f-name">Seu nome</label>
      </div>
      <div className="field">
        <input type="email" name="email" id="f-email" placeholder=" " required />
        <label htmlFor="f-email">Seu e-mail</label>
      </div>
      <div className="field">
        <textarea name="message" id="f-msg" placeholder=" " required />
        <label htmlFor="f-msg">Fale sobre seu projeto</label>
      </div>
      <button type="submit" className="send-btn" disabled={state === 'sending'}>
        <span>{LABELS[state]}</span>
      </button>
      <p id="form-feedback" className={state === 'sent' ? 'show' : undefined}>
        Mensagem enviada — te respondo em breve.
      </p>
    </form>
  )
}
