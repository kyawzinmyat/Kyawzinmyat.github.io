import React, { useRef, useEffect } from 'react'
import { motion, useInView } from "framer-motion"
import '../styles/aboutme.css'
import ProfessionalImage from '../assets/professional.png'
import EducationImage from '../assets/education.png'
import PersonalImage from '../assets/personal.png'

export default function Aboutme() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div className='box py-[2em] primary-color' ref={ref}>
            <div className='md:w-8/12 w-10/12 mx-auto text-center about-me-container' style={{
                transform: isInView ? 'none' : 'translateY(2000px)', opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <h1 className='md:text-3xl text-lg font-extrabold primary-color'>A Brief Introduction of Myself</h1>
                <div className='grid grid-cols-1 my-[4em] md:gap-10 gap-y-10'>
                    <motion.div className='grid md:grid-cols-3 grid-cols-1 secondary-bg primary-color rounded-[5px] shadow-lg'>
                        <img src={ProfessionalImage} alt='steve professioanl image' className='md:col-span-1'></img>

                        <div className='col-span-2 flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Professional
                                </motion.h1>
                                <hr></hr>
                                <div className='font-md text-sm md:text-md lg:p[5em] p-[3em]'>
                                    <p>My primary responsibilities include managing the timeline, maintaining communication with senior developers, and delivering the finished product on time while providing software implementations for customer demands via project manager and team leader. </p>
                                    <p className='my-5'>I took involved in my seniors' projects in addition to my own by helping them with bug finding, brainstorming with them to come up with better solutions, and taking ownership of their assignments.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='grid md:grid-cols-3 grid-cols-1 secondary-bg primary-color rounded-[5px] shadow-lg'>
                        <img src={PersonalImage} alt='steve professioanl image' className='md:col-span-1'></img>

                        <div className='col-span-2 flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Personal
                                </motion.h1>
                                <hr></hr>
                                <div className='xl:p-[4em] lg:p[5em] p-[3em] font-md text-sm md:text-md'>
                                    <p>I'm currently 20 years old living in Kamayut Township, Yangon. Playing video games and learning about new technologies, such as networking, software, and computer architecture, are two of my passions.</p>
                                    <p className='my-3'> I'm pursuing a Bachelor in Computer Science at an online university right now.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='grid md:grid-cols-3 grid-cols-1 secondary-bg primary-color rounded-[5px] shadow-lg'>
                        <img src={EducationImage} alt='steve professioanl image' className='md:col-span-1'></img>

                        <div className='col-span-2 flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Education
                                </motion.h1>
                                <hr></hr>
                                <div className='font-md xl:p-[4em] lg:p[5em] p-[3em] md:text-md text-sm'>
                                    <p>In 2019, I earned my high school diploma.
                                        At UCSY, I majored in computer science, but I no longer do so due to the political controversy.</p>
                                    <p className='my-3'>During the COVID pandemic, I took computer science courses like CS50 and Object-Oriented Java programming to advance my skills.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
