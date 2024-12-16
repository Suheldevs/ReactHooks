import React, { createContext, useState } from 'react'
export const ThemeContext = createContext()
function ThemeProvider({children}) {
  const [theme,setTheme] = useState('light')
const toggleTheme = ()=>{
  setTheme((pre)=>pre == 'light' ? 'dark':'light');
}

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider