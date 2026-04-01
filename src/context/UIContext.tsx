import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type Language = "lo" | "th" | "en"
export type ThemeMode = "light" | "dark"

interface UiContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  theme: ThemeMode
  toggleTheme: () => void
}

const UiContext = createContext<UiContextValue | undefined>(undefined)

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "lo"
  const stored = window.localStorage.getItem("language") as Language | null
  if (stored === "lo" || stored === "th" || stored === "en") return stored
  return "lo"
}

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem("theme") as ThemeMode | null
  if (stored === "light" || stored === "dark") return stored
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches
  return prefersDark ? "dark" : "light"
}

export const UiProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    if (typeof document === "undefined") return
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", lang)
    }
  }

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light"
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", next)
      }
      return next
    })
  }

  return (
    <UiContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
      {children}
    </UiContext.Provider>
  )
}

export const useUi = (): UiContextValue => {
  const ctx = useContext(UiContext)
  if (!ctx) {
    throw new Error("useUi must be used within UiProvider")
  }
  return ctx
}

