import { FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa'
import '../styles/contactme.css'
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export default function Contactme() {
    const email = 'kyawzinmyat00000001@gmail.com';
    const subject = '';
    const body = '';
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div className='box' id='contactme' ref={ref}>
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-10/12 mx-auto gap-10  section-margin'>
                <motion.div className='pb-[5em] w-full md:w-10/12 md:p-[2em]' initial={{ opacity: 0.3 }} viewport={{ once: true }} whileInView={{
                    opacity: 1,
                }}
                    transition={{ delay: .7 }}
                >
                    <h1>Get in touch with me</h1>
                    <p style={{ fontWeight: 100 }}>Let's transform an idea into reality!</p>
                </motion.div>
                <div style={{
                    transform: isInView ? 'none' : 'translateY(-200px)', opacity: isInView ? 1 : 0,
                    transition: "transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s, opacity 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }} className='contactme md:row-start-2 p-[1em] inline-flex justify-between md:w-10/12 items-center text-[0.9em] lg:text-[1.5em]'>
                    <a className='inline-flex items-center' href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
                        <div className='opacity-[.7]'>
                            <FaEnvelope size={25}></FaEnvelope>
                        </div>
                        <span className='mx-[.7em] font-md'>Send me an Email</span>
                    </a>
                    <span>
                        <FaArrowRight size={18}></FaArrowRight>
                    </span>
                </div>
                <div style={{
                    transform: isInView ? 'none' : 'translateY(-200px)', opacity: isInView ? 1 : 0,
                    transition: "transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s, opacity 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}  className='contactme md:row-start-2 p-[1em] inline-flex justify-between md:w-10/12 items-center text-[0.9em] lg:text-[1.5em]'>
                    <a className='inline-flex items-center' href="tel:09-968935307">
                        <div className='opacity-[.7]'>
                            <FaPhone size={25}></FaPhone>
                        </div>
                        <span className='mx-[.7em] font-md'>Call me directly</span>
                    </a>
                    <span>
                        <FaArrowRight size={18}></FaArrowRight>
                    </span>
                </div>
            </div>
        </div>
    )
}