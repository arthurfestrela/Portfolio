export interface ContactFormData {
  name: string
  email: string
  message: string
}

// TODO: substitua pelo endpoint real do seu formulário Formspree.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_ID_AQUI'

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Falha ao enviar o formulário de contato.')
}
