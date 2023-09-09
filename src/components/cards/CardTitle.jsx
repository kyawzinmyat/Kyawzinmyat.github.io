import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion';

export default function CardTitle({title, image, setCurrentImage}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-50% 0% -50% 0%"
    })

    useEffect(
        () => {
            if (isInView) setCurrentImage((<img  src={image} className='rounded-[20px] mx-auto object-cover' alt='image' style={{'transition': 'all 2s ease'}}></img>))
        }
    , [isInView])

    return (
        <p ref={ref} className='my-3 text-sm lg:text-md xl:text-4xl md:p-5 p-1' style={isInView ? {fontWeight: 900, scale: 1.5, transition: 'scale 3s ease'}: {fontWeight: 200, opacity: 0.3}}>{title}</p>
    )
}
