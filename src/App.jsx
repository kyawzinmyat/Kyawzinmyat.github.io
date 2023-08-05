import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home'
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
      <motion.div

      >
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </motion.div>
  )
}

export default App
