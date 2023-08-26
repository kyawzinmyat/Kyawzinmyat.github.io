import React from 'react'
import { motion } from 'framer-motion'

export default function PrimaryButton({children}) {
  return (
    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.7}} className='primary-accent-bg outline-none p-2 border-none rounded-full h-12 my-2 text-center w-36'>
          {children}
    </motion.button>
  )
}
