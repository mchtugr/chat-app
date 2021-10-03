import { createContext } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  switchTheme: () => {},
})

export default ThemeContext
