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
            rootMargin: '-100px'
        });
        const progresses = document.querySelectorAll('.progress');
        progresses.forEach(progress => {
            pObserver.observe(progress)
        })
    });

    let [show, setShow] = useState(false);
//linear-gradient(to left, rgb(0, 0, 0, 1) 0%, purple 100% ),
    return (
        <div className='m-[5em] px-[5em] box' >
            <div className='primary-color'>
                <h1 className='font-extrabold text-center primary-color header-upper-text'>Technical Stack</h1>
                <div className='md:w-4/12 w-8/12 my-5 mx-auto'>
                    <p className='text-center md:p-4 my-[3rem] md:text-md font-md text-sm'>I used a variety of technologies as a Developer responsible for building dynamic web apps to provide high-quality software. </p>
                </div>
            </div>
            <div className='primary-color my-4'>
                <div className='grid md:grid-cols-3 grid-cols-1 justify-center  item-center gap-10 w-10/12 mx-auto'>
                    <TechnicalCard information={technical} title='Technical'></TechnicalCard>
                    <TechnicalCard information={tools} title='Tools'></TechnicalCard>
                    <div className='md:col-span-1 '>
                        <TechnicalCard information={softskills} title='Soft Skills'></TechnicalCard>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 mx-auto progress section-margin'>
                {show && <>
                    <div className='secondary-bg md:p-5 md:m-3'>
                        <h1 className='primary-color text-sm lg:text-3xl text-center p-5' >Programming Languages</h1>
                        <div className='py-[3em] px-5 flex flex-col gap-6'>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>Python</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>JavaScript</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-70'></ProgressBar>
                                </div>
                                <span>70%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>Java</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-60'></ProgressBar>
                                </div>
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                    <div className='secondary-bg md:p-5 md:m-3'>
                        <h1 className='primary-color text-sm lg:text-3xl text-center p-5'>Frameworks</h1>
                        <div className='py-[3em] px-5 flex flex-col gap-6'>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>Django</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>Flask</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>Odoo</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>Tailwindcss</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-80'></ProgressBar>
                                </div>
                                <span>80%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>Bootstrap</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-80'></ProgressBar>
                                </div>
                                <span>80%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>React</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-70'></ProgressBar>
                                </div>
                                <span>70%</span>
                            </div>
                        </div>

                    </div>
                    <div className='secondary-bg md:p-5 md:m-3'>
                        <h1 className='primary-color text-sm lg:text-3xl text-center p-5'>Markup Languages</h1>
                        <div className='py-[3em] px-5 flex flex-col gap-6'>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>HTML</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>CSS</p>
                                <div className='col-span-4'>
                                    <ProgressBar height='20px' progress='linear-progress-90'></ProgressBar>
                                </div>
                                <span>90%</span>
                            </div>
                            <div className='gap-5 primary-color font-extrabold grid grid-cols-5'>
                                <p className='col-span-full'>XML</p>
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
