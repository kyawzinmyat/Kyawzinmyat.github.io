import React from 'react'
import { motion, transform } from 'framer-motion'

export default function ProjectCard({ title, img, index, description, technicals }) {
    return (
        <>
            <div className='col-start-1 secondary-bg flex justify-center items-center'>
                <motion.div className='p-[5em] primary-color text-center'>
                    <motion.div className='p-5'
                        initial={{ opacity: 0.1, scale: 0.2 }}
                        whileInView={
                            { opacity: 1, scale: 1, translateY: 0 }
                        }
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className='secondary-bg primary-color text-lg font-bold secondary-accent-bg p-5 rounded-full'>{title}</h1>
                        <p className=' text-xl font-md py-4'>{description}</p>
                        <p className='py-4 text-sm font-md'>Technolgies Using/ {technicals}</p>
                    </motion.div>
                </motion.div>
            </div>
            <div className='col-span-2' >
                <div className='border-2 grid  secondary-bg'>
                    <motion.img
                        initial={{ scale: 0.5, opacity: 0.7 }}
                        whileInView={
                            { scale: 1, opacity: 1 }
                        }
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className='object-cover col-span-3 secondary-bg' src={img} >

                    </motion.img>

                </div>
            </div>
        </>
    )
}
