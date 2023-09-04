import '../styles/landing.css'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion"

export default function Landing() {

  return (
    <motion.div initial={{ opacity: 0.7 }} viewport={{ once: true }} whileInView={{
      opacity: 1,
    }}
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
              <p className='text-xs md:text-sm font-light'>Passionate about creating cutting-edge web applications with both frontend and backend functionality.</p>
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

