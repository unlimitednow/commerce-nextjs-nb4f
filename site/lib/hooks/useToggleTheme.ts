import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const useToggleTheme = () => {
  const { theme, themes, setTheme } = useTheme()

  useEffect(() => {
    // always set theme to 'light'
    setTheme('light')
  }, [])

  return { theme: 'light', setTheme, themes }
}
