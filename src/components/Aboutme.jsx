import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useInView, useTransform, AnimatePresence } from "framer-motion"
import '../styles/aboutme.css'

export default function Aboutme() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    let [active, setActive] = useState('education')
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["end end", "end start"]
        }
    )

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.7, 0.8], [1, 0.8, 0]
    )

    return (
        <motion.div className='box aboutme-container mx-auto my-5 py-[2em] primary-color text-center max-h-max' ref={ref}  style={{ opacity }}>
            <h1 className='md:text-4xl header-text text-xs sm:text-xl font-extralight primary-color p-[2em] md:p-[5em]'>A Brief Introduction of Myself</h1>
            <div className='lg:w-9/12 w-full mx-auto about-me-container' style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div className='md:gap-10 gap-y-10'>
                    <motion.div className='flex md:col-span-2 px-[2em] justify-end'>
                        <ul className='flex gap-5 md:text-[1.3rem] xl:text-[1.5rem] text-[0.6rem] sm:text-[0.9rem] p-[0.1em] about-me-sections'>
                            <li className='p-[1em] relative font-light secondary-bg rounded-full' style={active === 'professional' ? {opacity: 1 } : { opacity: 0.4 }} onClick={() => setActive('professional')}>
                                Professional
                                {active === 'professional' &&<motion.div layoutId="underline" className='underline'></motion.div>}
                            </li>
                            <li className='p-[1em] relative font-light secondary-bg rounded-full' style={active === 'personal' ? {opacity: 1 } : { opacity: 0.4 }} onClick={() => setActive('personal')}>
                                Personal
                                {active === 'personal' &&<motion.div layoutId="underline" className='underline'></motion.div>}
                            </li>
                            <li className='p-[1em] relative font-light secondary-bg rounded-full' style={active === 'education' ? {opacity: 1 } : { opacity: 0.4 }} onClick={() => setActive('education')}>
                                Education
                                {active === 'education' &&<motion.div layoutId="underline" className='underline'></motion.div>}
                            </li>
                        </ul>
                    </motion.div>
                    <AnimatePresence>
                        <motion.div>
                                 {active === 'professional' && <motion.div 
                        className='primary-color rounded-[5px]  shadow-lg col-span-2' initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: .4 }} >
                            <div className='p-[2em] w-full sm:w-10/12 text-left flex justify-center items-center'>
                                <>
                                    <div className='font-md text-sm md:text-lg lg:py[5em] py-[3em] about-me-text font-sans max-w-[80ch]'>
                                        <p className='leading-9'>My primary responsibilities include <strong className='font-bold'>managing the timeline, maintaining communication with senior developers, and delivering the finished product on time</strong> while providing software implementations for customer demands via project manager and team leader. I took involved in my seniors' projects in addition to my own by helping them with bug finding, brainstorming with them to come up with better solutions, and taking ownership of their assignments.</p>
                                        <p className='my-[2em] leading-9'>I have experience working on a variety of ERP projects, including those related to the manufacturing of shoes, iron and steel, processed foods, managing  human resources, and more. They used a number of modules, including inventory, invoicing, sales, and procurement. I must implement extensive customizations in addition to the well-functioning modules to satisfy the client's localization requirements and address the business need.</p>
                                    </div>
                                </>
                            </div>
                        </motion.div>}

                            {active === 'personal' && <motion.div  className='primary-color rounded-[5px]  shadow-lg col-span-2' initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: .4 }} >
                                <div className='p-[2em] w-full sm:w-10/12 text-left flex justify-center items-center'>
                                    <>
                                        <div className='font-mono font-md text-sm md:text-md lg:py[5em] py-[3em] about-me-text max-w-[80ch]'>
                                            <p className='leading-9'>I'm currently 21 years old living in Kamayut Township, Yangon. Playing video games and learning about new technologies, such as networking, software, and computer architecture, are two of my passions. I'm pursuing a Bachelor in Computer Science at an online university right now.</p>
                                        </div>
                                    </>
                                </div>
                            </motion.div>}

                        {active === 'education' && <motion.div className='primary-color rounded-[5px]  shadow-lg col-span-2' initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: .4 }} >
                            <div className='p-[2em] w-full sm:w-10/12 text-left flex justify-center items-center'>
                                    <div className='font-md text-sm md:text-md lg:py[5em] py-[3em] about-me-text max-w-[80ch]'>
                                        <p className='leading-1'>In 2019, I earned my high school diploma.
                                            At UCSY, I majored in computer science, but I no longer do so due to the political controversy. During the COVID pandemic, I took computer science courses like CS50 and Object-Oriented Java programming to advance my skills.</p>
                                        <p className='my-[2em] '>
                                        In 2022, I tried to pursue a Bachelor in Computer Science online from the University of the People, a regionally accredited university located in California, United States. I have a 3.7 GPA after completing 20 credits of coursework. However, because to the internet connection, lack of professors engagement, and the university's regulations, I've decided to fulfill my US goal by studying a BSC in person.
                                            So, I applied to six community colleges and was accepted into each of them. Among them, I chose BMCC for its location, major, and amenities.
                                        </p>
                                    </div>
                            </div>
                        </motion.div>}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className='aboutme-image-container'>
                {/* <img src={SteveImage}></img> */}
            </div>
        </motion.div>
    )
}
