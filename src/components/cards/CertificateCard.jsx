import React from 'react'
import { motion } from 'framer-motion'

export default function CertificateCard({title, img}) {
  return (
    <motion.div className='shadow-lg md:w-1/3 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
        whileInView={{opacity:1, scale: 1.1}} initial={{opacity:0, scale: 0}}>
          <img src={img} alt='CS 50 Image'></img>
          <p className='p-4 md:text-md text-sm'>{title}</p>
    </motion.div>
  )
}
