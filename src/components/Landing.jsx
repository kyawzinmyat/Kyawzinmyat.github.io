import '../styles/landing.css'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react'

export default function Landing() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['end end', 'end start']
  })

  const background = useTransform(scrollYProgress, pos => {
    if (pos < 0.5) return `linear-gradient(-${pos * 365}deg , rgba(0, 0, 0, .1) 70%,  rgba(0, 0, 0, .8) 50%,  rgba(0, 0, 0, .8) 50%,var(--primary-accent-color)  100%)`
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.2, 0])

  return (
    <motion.div ref={ref} style={{background, opacity}} 
      transition={{ delay: .2 }} className='box landing-body wrapper flex justify-center items-center relative top-[-150px]'>
      <div className='flex justify-center items-center'>
        <div className='lg:grid lg:grid-cols-1 md:w-8/12 w-10/12 mx-auto my-[4em] grid'>
          {/* <div className='landing-animation'>
            <img src={SteveImage} alt='Steve Image'></img>
          </div> */}
          <div className='primary-color p-10 text-center flex justify-end items-center'>
            <div className='md:py-[2em] py-[8em] text-pop-animation landing-text'>
              <h1 className='lg:text-2xl md:text-xl sm:text-lg text-sm header-upper-text font-light'>Who Am I?</h1>
              <p className='my-5 body-text'>I'm an <strong className=''>enthusiastic software developer</strong> who lives in Yangon.</p>
              <p className='text-s md:text-sm font-md'>Passionate about creating cutting-edge web applications with both frontend and backend functionality.</p>
              <div className='flex justify-center py-[2em] gap-10'>
                <FaGithub size='50px'></FaGithub>
                <FaFacebook size='50px'></FaFacebook>
                <FaLinkedin size='50px'></FaLinkedin>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='foreground'>
          <img src={EarhtImage}></img>
        </div> */}
      </div>
    </motion.div>
  )
}

