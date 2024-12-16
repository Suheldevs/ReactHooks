import React, { useContext } from 'react'
import { ThemeContext } from '../Hooks/useContext/ThemeContext';

function Header() {
    console.log('Header fetched');
    const test = useContext(ThemeContext)
  return (
    <div>Header
      <button onClick={test.toggleTheme}>ToggleTheme</button>
    </div>

  )
}

export default React.memo( Header)