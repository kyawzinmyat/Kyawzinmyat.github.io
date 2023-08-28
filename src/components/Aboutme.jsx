import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from "framer-motion"
import '../styles/aboutme.css'

export default function Aboutme() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    let [active, setActive] = useState('professional')

    return (
        <div className='box aboutme-container mx-auto my-5 py-[2em] primary-color text-center' ref={ref}>
            <h1 className='md:text-4xl header-text text-2xl font-extrabold primary-color p-[2em] md:p-[5em]'>A Brief Introduction of Myself</h1>

            <div className='lg:w-9/12 w-full mx-auto about-me-container' style={{
                transform: isInView ? 'none' : 'translateY(2000px)', opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-y-10'>
                    <motion.div className='flex md:col-span-3 p-[2em] justify-end'>
                        <ul className='flex gap-5 md:text-[1rem] text-[0.8rem] p-[0.1em] about-me-sections'>
                            <li className='p-[1em] border-2 border-white secondary-bg rounded-full' style={active==='professional'?{backgroundColor: 'var(--secondary-accent-color)', color: 'black'} : {}} onClick={() => setActive('professional')}>Professional</li>
                            <li className='p-[1em] border-2 border-white secondary-bg rounded-full' style={active==='personal'?{backgroundColor: 'var(--secondary-accent-color)', color: 'black'} : {}} onClick={() => setActive('personal')}>Personal</li>
                            <li className='p-[1em] border-2 border-white secondary-bg rounded-full' style={active==='education'?{backgroundColor: 'var(--secondary-accent-color)', color: 'black'} : {}} onClick={() => setActive('education')}>Education</li>
                        </ul>
                    </motion.div>
                    {active === 'professional' &&  <motion.div className='primary-color rounded-[5px]  shadow-lg col-span-2' initial={{height: 0, overflow: 'hidden'}} whileInView={{height: '100%', transition: 'height 3s cubic-bezier(0,1.5,1,1.5)'}}>
                        <div className='p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Professional
                                </motion.h1>
                                <hr></hr>
                                <div className='font-md text-sm md:text-md lg:py[5em] py-[3em]'>
                                    <p>My primary responsibilities include managing the timeline, maintaining communication with senior developers, and delivering the finished product on time while providing software implementations for customer demands via project manager and team leader. </p>
                                    <p className='my-5'>I took involved in my seniors' projects in addition to my own by helping them with bug finding, brainstorming with them to come up with better solutions, and taking ownership of their assignments.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>}

                    {active === 'personal' && <motion.div className='primary-color rounded-[5px]  shadow-lg col-span-2' initial={{height: 0, overflow: 'hidden'}} whileInView={{height: '100%', transition: 'height 3s cubic-bezier(0,1.5,1,1.5)'}}>
                        <div className='p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Personal
                                </motion.h1>
                                <hr></hr>
                                <div className='font-md text-sm md:text-md lg:py[5em] py-[3em]'>
                                <p>I'm currently 20 years old living in Kamayut Township, Yangon. Playing video games and learning about new technologies, such as networking, software, and computer architecture, are two of my passions.</p>
                                    <p className='my-3'> I'm pursuing a Bachelor in Computer Science at an online university right now.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>}

                    {active === 'education' && <motion.div className='primary-color rounded-[5px]  shadow-lg col-span-2' initial={{height: 0, overflow: 'hidden'}} whileInView={{height: '100%', transition: 'height 3s cubic-bezier(0,1.5,1,1.5)'}}>
                        <div className='p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center'>
                            <div>
                                <motion.h1 initial="hidden"
                                    animate='visible'
                                    transition={{ duration: 10 }}
                                    className='text-lg font-bold md:text-2xl my-3'>
                                    Education
                                </motion.h1>
                                <hr></hr>
                                <div className='font-md text-sm md:text-md lg:py[5em] py-[3em]'>
                                <p>In 2019, I earned my high school diploma.
                                        At UCSY, I majored in computer science, but I no longer do so due to the political controversy.</p>
                                    <p className='my-3'>During the COVID pandemic, I took computer science courses like CS50 and Object-Oriented Java programming to advance my skills.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>}



                    {/* <motion.div className='grid md:grid-cols-3 grid-cols-1 secondary-bg primary-color rounded-[5px] shadow-lg'>
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
                    </motion.div> */}
                </div>
                {/* <div className='grid xl:grid-cols-2 py-[3em] grid-cols-1 font-extrabold gap-[100px]'>

                    <div className='text-center flex justify-center items-center' style={{
                        transform: isInView ? "none" : "translateX(-20000px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) .5s"

                    }}>
                        <div className=''>
                            <motion.h1 initial="hidden"
                                animate='visible'
                                transition={{ duration: 10 }}
                                className='text-lg font-bold md:text-2xl my-3'>
                                Professional
                            </motion.h1>
                            <hr></hr>
                            <div className='j  mx-auto black-color border-r-2 border-l-2 border-black lg:w-6/12 md:w-8/12 w-10/12  xl:w-10/12'>
                                <div className='text-sm md:text-md lg:p-[4em] p-[5em]'>
                                    <p>My primary responsibilities include managing the timeline, maintaining communication with senior developers, and delivering the finished product on time while providing software implementations for customer demands via project manager and team leader. </p>
                                    <p className='my-5'>I took involved in my seniors' projects in addition to my own by helping them with bug finding, brainstorming with them to come up with better solutions, and taking ownership of their assignments.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='text-center flex justify-center items-center' style={{
                        transform: isInView ? "none" : "translateX(20000px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) .5s"

                    }}>
                        <div className=''>
                            <motion.h1 initial="hidden"
                                animate='visible'
                                transition={{ duration: 10 }}
                                className='text-lg font-bold md:text-2xl my-3'>
                                Personal
                            </motion.h1>
                            <hr></hr>
                            <div className='j  mx-auto black-color border-r-2 border-l-2 border-black lg:w-6/12 md:w-8/12 w-10/12  xl:w-10/12'>
                                <div className='text-sm md:text-md lg:p-[4em] p-[5em]'>
                                <p>I'm currently 20 years old living in Kamayut Township, Yangon. Playing video games and learning about new technologies, such as networking, software, and computer architecture, are two of my passions.</p>
                                    <p className='my-3'> I'm pursuing a Bachelor in Computer Science at an online university right now.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center xl:col-span-3 w-10/12 md:w-8/12 xl:w-6/12 mx-auto flex justify-center items-center' style={{
                        scale: isInView ? 1: 1,
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) .5s"

                    }}>
                        <div className='mx-auto'>
                            <motion.h1 initial="hidden"
                                animate='visible'
                                transition={{ duration: 10 }}
                                className='text-lg font-bold md:text-2xl my-3'>
                                Education
                            </motion.h1>
                            <hr></hr>
                            <div className='t  mx-auto black-color border-l-2 border-r-2 border-black'>
                                <div className='text-sm md:text-md lg:p-[4em] p-[5em]'>
                                <p>In 2019, I earned my high school diploma.
                                        At UCSY, I majored in computer science, but I no longer do so due to the political controversy.</p>
                                    <p className='my-3'>During the COVID pandemic, I took computer science courses like CS50 and Object-Oriented Java programming to advance my skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
