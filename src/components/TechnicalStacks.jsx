import React, { useEffect, useState } from 'react'
import '../styles/technicalStacks.css'
import ProgressBar from './cards/ProgressBar';
import TechnicalCard from './cards/TechnicalCard';


const technical = [
    ['Python', 'Django/Rest', 'Odoo'],
    ['SQL/ NSQL', 'PostgreSQL', 'MySQL', 'Mongodb'],
    ['HTML/ CSS', 'Bootstrap', 'Tailwind CSS'],
    ['JavaScript', 'React', 'Vite']
]

const tools = [
    ['Visual Studio Code'],
    ['Eclipse'],
    ['pgAdmin'],
    ['Ubuntu'],
    ['Figma'],
    ['Git'],
    ['Docker']
]

const softskills = [
    ['Communication'],
    ['Positive Attitude'],
    ['Team Player'],
    ['Time Management']
]

export default function TechnicalStacks() {


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('expand', entry.isIntersecting);
                if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        }, {
            threshold: 1
        });
        const accordians = document.querySelectorAll('.accordian');
        accordians.forEach(accordian => {
            observer.observe(accordian)
        })

        const pObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    setShow(true)
                }
            })
        }, {
            threshold: 1,
            rootMargin: '-300px'
        });
        const progresses = document.querySelectorAll('.progress');
        progresses.forEach(progress => {
            pObserver.observe(progress)
        })
    });

    let [show, setShow] = useState(false);

    return (
        <div className='m-5 p-5 box'>
            <div className='black-color'>
                <h1 className='md:text-4xl text-md font-extrabold text-center primary-gradient-color'>Technical Stack</h1>
                <div className='md:w-4/12 w-8/12 my-5 mx-auto'>
                    <p className='text-center md:p-4 md:text-md font-light text-xs'>I used a variety of technologies as a Developer responsible for building dynamic web apps to provide high-quality software. </p>
                </div>
            </div>
            <div className='black-color my-4'>
                <div className='grid md:grid-cols-3 grid-cols-2 justify-center item-center gap-10 w-10/12 mx-auto'>
                    <TechnicalCard information={technical} title='Technical'></TechnicalCard>
                    <TechnicalCard information={tools} title='Tools'></TechnicalCard>
                    <TechnicalCard information={softskills} title='Soft Skills'></TechnicalCard>
                </div>
            </div>
            <div className='grid md:grid-cols-3 mx-auto progress'>
                {show && <>
                    <div className='white-transparent-bg p-5 m-3'>
                        <h1 className='primary-gradient-color text-3xl text-center p-5' >Programming Languages</h1>
                        <div className='py-[3em] px-5 flex flex-col gap-6'>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>Python</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>JavaScript</h1>
                                <div className='col-span-4 linear-progress-70'>
                                    <ProgressBar height='20px'></ProgressBar>
                                </div>
                                <span>70%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>Java</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-60'></ProgressBar>
                                </div>
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                    <div className='white-transparent-bg p-5 m-3'>
                        <h1 className='primary-gradient-color text-3xl text-center p-5'>Frameworks</h1>
                        <div className='py-[3em] px-5 flex flex-col gap-6'>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>Django</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>Flask</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>Odoo</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>Tailwindcss</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-80'></ProgressBar>
                                </div>
                                <span>80%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>Bootstrap</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-80'></ProgressBar>
                                </div>
                                <span>80%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>React</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-70'></ProgressBar>
                                </div>
                                <span>70%</span>
                            </div>
                        </div>

                    </div>
                    <div className='white-transparent-bg p-5 m-3'>
                        <h1 className='primary-gradient-color text-3xl text-center p-5'>Markup Languages</h1>
                        <div className='py-[3em] px-5 flex flex-col gap-6'>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>HTML</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>CSS</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 black-color font-extrabd grid grid-cols-5'>
                                <h1 className='col-span-full'>XML</h1>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                        </div>
                    </div></>}
            </div>
        </div>
    )
}
