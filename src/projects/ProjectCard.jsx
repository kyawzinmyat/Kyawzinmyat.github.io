import React from 'react'
import { motion, transform } from 'framer-motion'
import LaptopImage from '../assets/laptop.png'
import PhoneImage from '../assets/phone.jpg'

export default function ProjectCard({ title, mobileImg, img, description, technicals }) {

    const renderImages = () => {
        if (img.length > mobileImg.length) {
            return img.map((image, index) => {
                return (
                    <div key={index} className='flex justify-center items-center'>
                        <picture>
                            {index < mobileImg.length && <source className='w-[20%]' srcSet={mobileImg[index]} alt={title} media='(max-width:767px)'></source>
                            }
                            <img

                                alt={title}
                                className='col-span-3 secondary-bg object-contain' src={image} >
                            </img>
                        </picture>
                    </div>
                )
            })
        }
        return mobileImg.map((image, index) => {
            return (
                <div key={index} >
                    <picture>
                        <source alt={title} className='w-[20%]' srcSet={image} media='(max-width:767px)'></source>
                        {
                            index < img.length ? <img
                                alt={title}
                                className='col-span-3 secondary-bg object-contain' src={img[index]} >
                            </img> : <img></img>
                        }
                    </picture>
                </div>
            )
        })
    }

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
                        <h2 className='secondary-bg primary-color md:text-md sm-text-sm  font-bold secondary-accent-bg p-5 rounded-full'>{title}</h2>
                        <p className='lg:text-sm xl:text-lg w-[30ch] text-sm md:w-10/12 mx-auto lg:p-0  font-md py-5 md:p-5 lg:py-4'>{description}</p>
                        <p className='lg:py-4 p-2 text-xs font-md'>Technolgies Using/ </p><span>{technicals}</span>
                    </motion.div>
                </motion.div>
            </div>
            <div className='md:col-span-2 secondary-bg' >
                <div className='grid  secondary-bg relative'>
                    <picture className='w-[200px] xxs:w-[300px] xs:w-[400px] sm:w-[400px] md:w-[600px] xl:w-[800px] lg:w-[600px] mx-auto'>
                        <source srcSet={PhoneImage} media='(max-width:767px)' className='mx-auto'></source>
                        <img src={LaptopImage}
                            className='relative' alt='laptop image'></img>
                    </picture>

                    <div className='absolute w-[110px] xs:w-[112px] sm:w-[150px] md:w-[450px] lg:w-[460px] xl:w-[610px] top-[10%] md:top-5 left-0 right-0 bottom-0 mx-auto item-center rounded-[10px] h-[80%] md:h-[63%] xl:h-[65%] overflow-scroll'>
                        {renderImages()}
                    </div>

                </div>
            </div>
        </>
    )
}
