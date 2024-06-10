import '../styles/landing.css'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react'
import Kyawzin from './../assets/kyawzinmyat.jpg'
import { FaLinkedinIn } from "react-icons/fa6";

export default function Landing() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'end start']
  })

  const background = useTransform(scrollYProgress, pos => {
    // return `linear-gradient(to left bottom , rgba(0, 0, 0, .1) 20%,  rgba(0, 0, 0, .8) 20%,  rgba(0, 0, 0, .8) 20%, rgba(160,77,239, ${1 - pos})  100%)`
    // if (pos > 0.25)
    // {
    //   return `radial-gradient(at bottom right, transparent ${(1 - pos) * 100}%, var(--primary-accent-color) ${(1 - pos) * 100}%),  linear-gradient(135deg, black 0%, black 100%)`
    // }
    // return `radial-gradient(at bottom right, transparent ${(1 - 0.25) * 100}%, var(--primary-accent-color) ${(1 - 0.25) * 100}%),  linear-gradient(135deg, black 0%, black 100%)`
    return 'radial-gradient(cyan at center, black 90%, var(--primary-accent-color) 90%)'
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.6], [1, 0.5, 0])
  const gitOpacity = useTransform(scrollYProgress, [0, .3, .6, .7], [0.1, 0.2, .1, 0])

  const iconsVar = {
    open: {
      opacity: 1,
      scale: 1,
      transition: '0.6s ease-in-out ',
    },
    initial: {
      opacity: 0,
      scale: 0,
      transition: '0.6s ease'
    }
  }

  const containerVar = {
    initial: {
      transition: {
        staggerChildren: 0.19,
        stagerDirection: 1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        stagerDirection: -1
      }
    }
  }

  return (
    <motion.div ref={ref} className='box wrapper flex justify-center items-center relative overflow-y-scroll h-[85vh] mb-[200px]'>
      <motion.div style={{
        opacity, zIndex: 9099,
      }}
        transition={{ delay: .2 }} className='flex justify-center items-center'  >
        <div className='lg:grid lg:grid-cols-1 md:w-8/12 w-10/12 mx-auto my-[4em] grid'>
          <div className='primary-color over p-10 text-center flex flex-col justify-end items-center border-l-2'>
            <motion.div className='md:py-[2em] overflow-hidden py-[8em] text-pop-animation landing-text flex flex-col md:flex-row justify-center items-center' variants={containerVar} initial='initial' animate='open'>
              <div className='w-full text-left'>
                <motion.h1 variants={iconsVar} className='lg:text-2xl over md:text-xl sm:text-lg text-sm header-upper-text font-light'>Who Am I?</motion.h1>
                <motion.p variants={iconsVar} className='my-5 body-text'>I'm an <strong className=''>enthusiastic software developer</strong> who lives in Yangon.</motion.p>
                <motion.p variants={iconsVar} className='text-sm md:text-lg font-md text-gray-400 font-md'>Passionate about creating cutting-edge web applications with both frontend and backend functionality.</motion.p>
              </div>
              <motion.div className='w-full'>
                <motion.div className='w-[60%] mx-auto py-[2em] relative' >
                  <motion.div variants={iconsVar} className='relative'>
                    <img src={Kyawzin} width={200} className='rounded-full relative opacity-70 ' variants={iconsVar}></img>
                  </motion.div>
                  <motion.div variants={iconsVar} className='absolute top-[90%] bottom-0 left-[-5%]'>
                    <a href='https://github.com/kyawzinmyat' target='_blank'>
                      <FaGithub size='50px' className='hover:bg-white font-semibold rounded-full shadow-lg shadow-indigo-100/40 focus:outline-none'></FaGithub>
                    </a>
                  </motion.div>
                  <motion.div variants={iconsVar} className='absolute top-[45%] left-[74%] '>
                    <a href='https://www.facebook.com/itsthe0/' target='_blank'>
                      <FaFacebook size='50px' className='hover:bg-white font-semibold rounded-full shadow-lg shadow-indigo-100/40'></FaFacebook>
                    </a>
                  </motion.div>
                  {/* <motion.div variants={iconsVar} className='absolute bottom-[100%] '>
                    <a href='https://www.linkedin.com/in/kyawzin-myat/' target='_blank'>
                      <FaLinkedinIn size='50px' color='white' className='hover:bg-violet-500 font-semibold rounded-full shadow-lg shadow-indigo-100/40 focus:outline-none'></FaLinkedinIn>
                    </a>
                  </motion.div> */}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ opacity: gitOpacity }}>
        <div className='git-body' style={{
          zIndex: -1
        }}>

        </div>
      </motion.div>
    </motion.div>
  )
}

