import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <p>Welcome to react learning</p>
    <Home />
    <br />
    <Add/>
    </>
  )
}

export default App
