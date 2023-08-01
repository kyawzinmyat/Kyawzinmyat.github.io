import { useState } from 'react'
import './App.css'
import PrimaryButton from './components/buttons/PrimaryButton'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Aboutme from './components/Aboutme'
import TechnicalStacks from './components/TechnicalStacks'
import Certificates from './components/Certificates'
import Goals from './components/Goals'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
      <Aboutme></Aboutme>
      <TechnicalStacks></TechnicalStacks>
      <Certificates></Certificates>
      <Goals></Goals>
      <Footer></Footer>
    </>
  )
}

export default App
