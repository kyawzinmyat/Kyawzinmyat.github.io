import './App.css'
import Navbar from './components/Navbar'
import Aboutme from './pages/Aboutme'
import Footer from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/aboutme",
      element: <Aboutme/>
    },
    {
      path: "/",
      element: <Home/>
    },
  ]);  


  return (
    <>
      <Navbar></Navbar>
        <RouterProvider router={router}>

        </RouterProvider>
      <Footer></Footer>
    </>
  )
}

export default App
