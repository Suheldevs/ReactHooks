import React, { useContext } from 'react'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'
import UseLayoutEffect from './Hooks/UseLayoutEffect'
import Header from './Components/Header'
import { ThemeContext } from './Hooks/useContext/ThemeContext'
import './App.css'
import UseReducer from './Hooks/UseReducer'
const App = () => {
  const test = useContext(ThemeContext)
  return (
    <div className={test.theme == 'light' ? 'dark' : 'light'}>
      {/* <UseState/>
      <UseEffect/>
      <UseRef/>
      <UseMemo/>
      <UseCallback/>
      <UseLayoutEffect/> */}
      {/* <Header/> */}
      <UseReducer/>
    </div>
  )
}

export default App