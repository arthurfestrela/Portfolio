import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('light') ? 'light' : 'dark'
  )

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('light', next === 'light')
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* localStorage indisponível (modo privado, etc.) — tema não persiste */
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
