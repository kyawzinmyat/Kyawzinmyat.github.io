import React from 'react'
import { motion } from 'framer-motion'

export default function CertificateCard({title, img}) {
  return (
    <motion.div className='shadow-lg md:w-1/3 w-full'>
          <img src={img} alt={title} className='rounded-full'></img>
          <p className='p-4 md:text-md text-sm'>{title}</p>
    </motion.div>
  )
}
