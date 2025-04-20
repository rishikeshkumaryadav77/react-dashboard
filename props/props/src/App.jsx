import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
import Second from './Second'
import Third from './Third'

function App() {
  const [count, setCount] = useState(0)
  // passing props throug parent component
    const wish = "hello"
  return (
    <>
      <First wish = {wish}/>
      <Second wish = {wish}/>
      <Third wish = {wish}/>
    </>
  )
}

export default App
