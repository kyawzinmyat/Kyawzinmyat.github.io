import React, { useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion';

export default function Event({ icon, texts, left }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-10% 0% -30% 0%"
    })

    const textVar = {
        initial: {
            opacity: 0,
            scale: 0,
            y: 100,
            transition: {
                duration: 1.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: .5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {}
    }

    return (
        <div className='text-6xl relative h-[350px]' ref={ref}>
            {
                isInView &&
                <AnimatePresence>
                    <motion.div variants={textVar} animate='animate' initial='initial' exit='initial' className='inline-flex absolute  flex-col justify-center items-center' style={
                        left ? { left: 0 } : { right: 0 }
                    }>
                        {icon}
                        <div className='my-5'>
                            {
                                texts.map(
                                    (text, index) => {
                                        return <p key={index} className='md:text-lg w-/12 mx-auto text-center text-sm lg:text-[0.5em]'>{text}</p>
                                    }
                                )
                            }
                        </div>
                    </motion.div>
                </AnimatePresence>
            }
        </div >
    )
}
