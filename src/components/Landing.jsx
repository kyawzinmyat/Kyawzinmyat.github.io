import '../styles/landing.css'
import SteveImage from '../assets/STEVE.png'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function Landing() {

  return (
    <div className='box wrapper'>
      <div className='landing-body flex justify-center items-center'>
        <div className='lg:grid lg:grid-cols-1 md:w-8/12 w-10/12 mx-auto my-[4em] grid'>
          {/* <div className='landing-animation'>
            <img src={SteveImage} alt='Steve Image'></img>
          </div> */}
          <div className='primary-color p-10 text-center flex justify-end items-center'>
            <div className='md:py-[2em] py-[8em] text-pop-animation'>
              <h1 className='font-bold text-2xl'>Who Am I?</h1>
              <p className='my-5 body-text'>I'm an <strong className=''>enthusiastic software developer</strong> who lives in Yangon.</p>
              <p className='text-md font-light'>Passionate about creating cutting-edge web applications with both frontend and backend functionality.</p>
              <div className='flex justify-center py-[2em] gap-10'>
                <FaGithub size='50px'></FaGithub>
                <FaFacebook size='50px'></FaFacebook>
                <FaLinkedin size='50px'></FaLinkedin>
              </div>
            </div>
          </div>
        </div>
        <div className='foreground'>

        </div>
      </div>
    </div>
  )
}

