import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from "framer-motion"
import '../styles/aboutme.css'

export default function Aboutme() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    let [active, setActive] = useState('professional')

    return (
        <div className='box aboutme-container mx-auto my-5 py-[2em] primary-color text-center max-h-max' ref={ref}>
            <h1 className='md:text-4xl header-text text-xs sm:text-xl font-extrabold primary-color p-[2em] md:p-[5em]'>A Brief Introduction of Myself</h1>

            <div className='lg:w-9/12 w-full mx-auto about-me-container' style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-y-10'>
                    <motion.div className='flex md:col-span-2 px-[2em] justify-end'>
                        <ul className='flex gap-5 md:text-[1.3rem] xl:text-[1.5rem] text-[0.6rem] sm:text-[0.9rem] p-[0.1em] about-me-sections'>
                            <li className='p-[1em] font-bold secondary-bg rounded-full ' style={active==='professional'?{backgroundColor: 'var(--secondary-accent-color)', color: 'black', opacity: 1} : {opacity: 0.7}} onClick={() => setActive('professional')}>Professional</li>
                            <li className='p-[1em] font-bold secondary-bg rounded-full' style={active==='personal'?{backgroundColor: 'var(--secondary-accent-color)', color: 'black', opacity: 1} : {opacity: 0.7}} onClick={() => setActive('personal')}>Personal</li>
                            <li className='p-[1em] font-bold secondary-bg rounded-full' style={active==='education'?{backgroundColor: 'var(--secondary-accent-color)', color: 'black', opacity: 1} : {opacity: 0.7}} onClick={() => setActive('education')}>Education</li>
                        </ul>
                    </motion.div>
                    {active === 'professional' &&  <motion.div className='primary-color rounded-[5px]  shadow-lg col-span-2'>
                        <div className='p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Professional
                                </motion.h1>
                                <hr></hr>
                                <div className='font-md text-sm md:text-md lg:py[5em] py-[3em] about-me-text'>
                                    <p>My primary responsibilities include <strong className='uppercase font-black'>managing the timeline, maintaining communication with senior developers, and delivering the finished product on time</strong> while providing software implementations for customer demands via project manager and team leader. I took involved in my seniors' projects in addition to my own by helping them with bug finding, brainstorming with them to come up with better solutions, and taking ownership of their assignments.</p>
                                    <p className='my-[2em]'>I have experience working on a variety of ERP projects, including those related to the manufacturing of shoes, iron and steel, processed foods, managing  human resources, and more. They used a number of modules, including inventory, invoicing, sales, and procurement. I must implement extensive customizations in addition to the well-functioning modules to satisfy the client's localization requirements and address the business need.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>}

                    {active === 'personal' && <motion.div className='primary-color rounded-[5px]  shadow-lg col-span-2'>
                        <div className='p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Personal
                                </motion.h1>
                                <hr></hr>
                                <div className='font-md text-sm md:text-md lg:py[5em] py-[3em] about-me-text'>
                                <p>I'm currently 20 years old living in Kamayut Township, Yangon. Playing video games and learning about new technologies, such as networking, software, and computer architecture, are two of my passions.</p>
                                    <p className='my-3'> I'm pursuing a Bachelor in Computer Science at an online university right now.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>}

                    {active === 'education' && <motion.div className='primary-color rounded-[5px]  shadow-lg col-span-2'>
                        <div className='p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Education
                                </motion.h1>
                                <hr></hr>
                                <div className='font-md text-sm md:text-md lg:py[5em] py-[3em] about-me-text'>
                                <p>In 2019, I earned my high school diploma.
                                        At UCSY, I majored in computer science, but I no longer do so due to the political controversy.</p>
                                    <p className='my-3'>During the COVID pandemic, I took computer science courses like CS50 and Object-Oriented Java programming to advance my skills.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>}
                </div>
            </div>

            <div className='aboutme-image-container'>
                <img src={SteveImage}></img>
            </div>
        </div>
    )
}
