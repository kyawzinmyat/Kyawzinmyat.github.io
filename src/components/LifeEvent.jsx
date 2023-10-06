import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MdOutlineSchool, MdOutlineWorkOutline } from 'react-icons/md'
import Event from './Event';
import {LuSchool2} from 'react-icons/lu'

export default function LifeEvent() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start center', 'end center']
        }
    )
        

    return (
        <div>
            <div className='primary-color my-4' >
                <motion.div className='flex relative  w-10/12 items-start gap-20 mx-auto'>
                    <motion.div className='vb-bar vb origin-top' ref={ref} style={{ scaleY: scrollYProgress }}></motion.div>
                    <motion.div className='w-full' >
                        <div className='grid grid-cols-1 gap-10'>
                            <Event icon={<LuSchool2/>} left texts={['Graduated from High School', '(2019)']}></Event>
                            <Event icon={<MdOutlineSchool/>}  texts={['Persue a degree', 'at UCSY', '(2019)']}></Event>  
                            <Event icon={<MdOutlineWorkOutline/> } left  texts={['Landed a first developer job', 'at GCA', '(2022 - present)']}></Event>                                                                              
                        </div>
                    </motion.div>
                    {/* <div className='w-full sticky top-0 h-[60vh] flex items-center'>
                        <motion.div className='w-full aspect-square flex justify-center items-center'>
                            <p>(2019)</p>
                        </motion.div>
                    </div> */}
                </motion.div>
            </div>
        </div>
    )
}
