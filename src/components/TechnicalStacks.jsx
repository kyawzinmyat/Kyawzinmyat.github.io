import React, { useState, useRef, useEffect } from 'react'
import '../styles/technicalStacks.css'
import ProgressBar from './cards/ProgressBar';
import TechnicalCard from './cards/TechnicalCard';
import PythonImage from '../assets/technical/python.png'
import DjangoImage from '../assets/technical/django.png'
import EclipseImage from '../assets/technical/eclipse.png'
import GitImage from '../assets/technical/github.png'
import HTMLImage from '../assets/technical/html5.png'
import CSSImage from '../assets/technical/css3.png'
import JSImage from '../assets/technical/javascript.png'
import VSCImage from '../assets/technical/visual-studio-code.png'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const technical = [
    ['Python', PythonImage], ['Django', DjangoImage], ['Odoo', PythonImage],
    ['PSQL', PythonImage], ['Mongodb', PythonImage],
    ['HTML', HTMLImage], ['CSS', CSSImage], ['Bootstrap', PythonImage], ['Tailwind CSS', PythonImage],
    ['JavaScript', JSImage], ['React', PythonImage], ['Vite', PythonImage]
]

const tools = [
    ['Visual Studio Code', VSCImage],
    ['Eclipse', EclipseImage],
    ['pgAdmin', PythonImage],
    ['Ubuntu', PythonImage],
    ['Figma', PythonImage],
    ['Git', GitImage],
    ['Docker', PythonImage]
]

const softskills = [
    ['Communication', PythonImage],
    ['Positive Attitude', PythonImage],
    ['Team Player', PythonImage],
    ['Time Management', PythonImage]
]

export default function TechnicalStacks() {

    const myStyle = {
        background: "linear-gradient(to left bottom, rgb(0, 0, 0, 1) 0%,  rgb(0, 0, 0, 1) 50%, #a04def 50%, #a04def 100%)"
    }

    var ref = useRef(null)
    var container = useRef(null)

    const isInView = useInView(ref)
    // const { scrollYProgress } = useScroll(
    //     {
    //         target: ref,
    //         offset: ['start center', 'end center']
    //     }
    // )

    // let [currentImage, setCurrentImage] = useState(null)

    // var opacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0])
    // var scaleY = useTransform(scrollYProgress, [0, 1], [0.3, 1])

    return (
        <motion.div className='box' >
            <div className='primary-color'>
                <h1 className='font-md text-center primary-color header-upper-text'>Technical Stack</h1>
                <div className='md:w-4/12 w-8/12 my-5 mx-auto'>
                    <p className='text-center md:p-4 my-[1rem] text-gray-400 md:text-[1em]'>I used a variety of technologies as a Developer responsible for building dynamic web apps to provide high-quality software. </p>
                </div>
            </div>
            {/* <div className='primary-color my-4' >
                <motion.div className='flex relative w-10/12 items-start gap-20 mx-auto'>
                    <motion.div className='vb-bar vb origin-top' ref={ref} style={{scaleY: scrollYProgress}}></motion.div>
                    <motion.div className='w-full py-[40vh]' >
                        <TechnicalCard setCurrentImage={setCurrentImage} information={technical} title='Technical'></TechnicalCard>
                        <TechnicalCard setCurrentImage={setCurrentImage} information={tools} title='Tools'></TechnicalCard>
                        <TechnicalCard setCurrentImage={setCurrentImage} information={softskills} title='Soft Skills'></TechnicalCard>
                    </motion.div>
                    <div className='w-full sticky top-0 h-[100vh] flex items-center'>
                        <motion.div className='w-full aspect-square flex justify-center items-center'>
                            {currentImage}
                        </motion.div>
                    </div>
                </motion.div>
            </div> */}
            <div className='grid md:grid-cols-3 mx-auto progress section-margin gap-y-[8rem]'ref={ref}>
                <div className='secondary-bg md:p-5 m-[3em] md:m-3'>
                    <h1 className='primary-color text-md lg:text-3xl text-center p-5' >Programming Languages</h1>
                    <div className='py-[3em] px-[1.9rem] flex flex-col gap-6'>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>Python</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-90' || '' }></ProgressBar>
                            </div>
                            <span>90%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>JavaScript</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-70' || '' }></ProgressBar>
                            </div>
                            <span>70%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>Java</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-60' || '' }></ProgressBar>
                            </div>
                            <span>60%</span>
                        </div>
                    </div>
                </div>
                <div className='secondary-bg md:p-5 m-[3em] md:m-3 primary-accent-gradient-bg rounded-[30px]'>
                    <h1 className='primary-color text-md lg:text-3xl text-center p-5'>Frameworks</h1>
                    <div className='py-[3em] px-[1.9rem] flex flex-col gap-6'>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>Django</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-90' || '' }></ProgressBar>
                            </div>
                            <span>90%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>Flask</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-90' || '' }></ProgressBar>
                            </div>
                            <span>90%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>Odoo</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-90' || '' }></ProgressBar>
                            </div>
                            <span>90%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>Tailwindcss</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-80' || '' }></ProgressBar>
                            </div>
                            <span>80%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>Bootstrap</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-80' || '' }></ProgressBar>
                            </div>
                            <span>80%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>React</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-70' || '' }></ProgressBar>
                            </div>
                            <span>70%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>React Native</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-50' || '' }></ProgressBar>
                            </div>
                            <span>50%</span>
                        </div>
                    </div>

                </div>
                <div className='secondary-bg md:p-5 m-[3em] md:m-3'>
                    <h1 className='primary-color text-md lg:text-3xl text-center p-5'>Markup Languages</h1>
                    <div className='py-[3em] px-[1.9em] flex flex-col gap-6'>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>HTML</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-90' || '' }></ProgressBar>
                            </div>
                            <span>90%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>CSS</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-90' || '' }></ProgressBar>
                            </div>
                            <span>90%</span>
                        </div>
                        <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                            <p className='col-span-full'>XML</p>
                            <div className='col-span-4'>
                                <ProgressBar height='20px' progress={isInView && 'linear-progress-90' || '' }></ProgressBar>
                            </div>
                            <span>90%</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
