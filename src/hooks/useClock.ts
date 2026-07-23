import { useEffect, useState } from 'react'

function formatTime(): string {
  return new Date().toLocaleTimeString('pt-BR', {
    timeZone: 'America/Bahia',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

/** Hora local de Salvador/BA (GMT-3), atualizada a cada segundo. */
export function useClock(): string {
  const [time, setTime] = useState(formatTime)

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
