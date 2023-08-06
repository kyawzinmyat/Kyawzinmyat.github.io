import React from 'react'
import { motion, transform } from 'framer-motion'
import LaptopImage from '../assets/laptop.png'
import PhoneImage from '../assets/phone.jpg'
import Phone100Image from '../assets/phone-100.jpg'

export default function ProjectCard({ title, mobileImg, img, description, technicals }) {
    return (
        <>
            <div className='md:col-start-1 secondary-bg flex justify-center items-center'>
                <motion.div className='p-[5em] primary-color text-center'>
                    <motion.div className='p-1'
                        initial={{ opacity: 0.1, scale: 0.2 }}
                        whileInView={
                            { opacity: 1, scale: 1, translateY: 0 }
                        }
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className='secondary-bg primary-color md:text-md sm-text-sm lg:text-lg font-bold secondary-accent-bg p-5 rounded-full'>{title}</h1>
                        <p className='lg:text-sm text-sm md:w-10/12 mx-auto lg:p-0  font-md py-1 md:p-5 lg:py-4'>{description}</p>
                        <p className='lg:py-4 text-xs font-md'>Technolgies Using/ {technicals}</p>
                    </motion.div>
                </motion.div>
            </div>
            <div className='md:col-span-2 secondary-bg' >
                <div className='border-2 grid  secondary-bg relative'>
                    <picture className='w-[300px] sm:w-[300px] md:w-[600px] lg:w-[700px] mx-auto'>
                        <source srcSet={PhoneImage} media='(max-width:767px)' className='mx-auto'></source>
                        {/* <source srcSet={Phone100Image} media='(max-width:400px)' className='w-[100px]'></source> */}
                        <img src={LaptopImage}
                            className='relative' alt='laptop image'></img>
                    </picture>

                    <div className=' absolute w-[100px] sm:w-[110px] md:w-[410px] lg:w-[450px] top-[13%] md:top-5 lg:top-5  left-0 right-0 bottom-0 mx-auto item-center rounded-lg h-[76%] md:h-[62%] overflow-scroll'>
                        <picture>
                            <source className='w-[20%]' srcSet={mobileImg} media='(max-width:767px)'></source>
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0.7 }}
                                whileInView={
                                    { scale: 1, opacity: 1 }
                                }
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className='col-span-3 secondary-bg object-contain' src={img} >
                            </motion.img>
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0.7 }}
                                whileInView={
                                    { scale: 1, opacity: 1 }
                                }
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className='col-span-3 secondary-bg object-contain' src={img} >
                            </motion.img>
                        </picture>
                    </div>

                </div>
            </div>
        </>
    )
}
