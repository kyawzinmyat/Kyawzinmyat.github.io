import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import '../styles/card.css'

export default function CardTitle({ title, image, setCurrentImage }) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["end end", "end start"]
        }
    )
    const isInView = useInView(ref, {
        margin: "-50% 0% -50% 0%"
    })

    const scaleY = useTransform(scrollYProgress, [0, 1], [0.5, 2])
    const scaleC = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [0, 0, 0.9, 1])

    useEffect(
        () => {
            if (isInView) setCurrentImage((<img src={image} className='rounded-[20px] mx-auto object-cover' alt='image' style={{ 'transition': 'all 2s ease' }}></img>))
        }
        , [isInView])

    return (
        <div className='technical w-full ' ref={ref} style={{  scrollSnapAlign: 'start'}}>
            <p ref={ref} className='text-md md:text-2xl lg:text-3xl xl:text-5xl md:p-[5em] p-[3em]' style={isInView ? { opacity: 1, scale: 1.5, transition: 'scale 3s ease' } : { fontWeight: 200, opacity: 0.3 }}>{title}</p>      
            <motion.div className='technical-ba origin-top'  style={{scaleY}}></motion.div>
            {/* <motion.div className='technical-circle' style={{scale: scaleC}} ></motion.div> */}
        </div>
    )
}
