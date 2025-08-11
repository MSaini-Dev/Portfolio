import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

type Props = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: "class" | "data-theme"
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  attribute = "class",
}: Props) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme
    } catch {
      return defaultTheme
    }
  })

  const setTheme = (t: Theme) => {
    try {
      localStorage.setItem(storageKey, t)
    } catch {}
    setThemeState(t)
  }

  useEffect(() => {
    const root = document.documentElement
    const apply = (t: Exclude<Theme, "system">) => {
      if (attribute === "class") {
        root.classList.remove("light", "dark")
        root.classList.add(t)
      } else {
        root.setAttribute("data-theme", t)
      }
    }

    if (theme === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)")
      const system = mql.matches ? "dark" : "light"
      apply(system)
      const listener = (e: MediaQueryListEvent) => apply(e.matches ? "dark" : "light")
      mql.addEventListener?.("change", listener)
      return () => mql.removeEventListener?.("change", listener)
    } else {
      apply(theme)
    }
  }, [theme, attribute])

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeProviderContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
