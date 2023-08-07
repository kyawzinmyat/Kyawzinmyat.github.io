import './App.css'
import Navbar from './components/Navbar'
import Aboutme from './pages/Aboutme'
import Footer from './components/Footer'
import Home from './Home'

function App() {
  return (
    <>
      <Navbar activePage='home'></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
