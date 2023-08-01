import React, { useEffect } from 'react'
import '../styles/technicalStacks.css'



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
    });
    return (
        <div className='m-5 p-5 box'>
            <div className='black-color'>
                <h1 className='text-4xl font-extrabold text-center'>Technical Stack</h1>
                <div className='w-4/12 my-5 mx-auto'>
                    <p className='text-center  p-3 font-light'>I used a variety of technologies as a Developer responsible for building dynamic web apps to provide high-quality software. </p>
                </div>
            </div>
            <div className='secondary-color'>
                <div className='grid md:grid-cols-3 grid-cols-2 justify-center item-center gap-10 w-10/12 mx-auto'>
                    <div id='accordian' className='accordian primary-bg rounded-[5px] row-span-3 '>
                        <h1 className='text-sm md:text-xl font-bold text-center p-5'>Technical</h1>
                        <hr></hr>
                        <div className='p-5 md:text-[15px] text-[10px] font-extrabold'>
                            <h1 className='my-3'>Python</h1>
                            <ul className='border-b-2 p-2 flex flex-col gap-5'>
                                <li>Django/ Rest</li>
                                <li>Flask</li>
                                <li>Odoo</li>
                            </ul><br></br>
                            <h1 className='my-3'>SQL/ NSQL</h1>
                            <ul className='border-b-2 p-2 flex flex-col gap-5'>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>Mongodb</li>
                            </ul><br></br>
                            <h1 className='my-3'>HTML/ CSS</h1>
                            <ul className='border-b-2 p-2 flex flex-col gap-5'>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                            </ul><br></br>
                            <h1 className='my-3'>JavaScript</h1>
                            <ul className='border-b-2 p-2 flex flex-col gap-5'>
                                <li>React</li>
                            </ul><br></br>
                        </div>
                    </div>
                    <div id='accordian' className='accordian primary-bg rounded-[5px] row-span-2 '>
                        <h1 className='text-sm md:text-xl font-bold text-center p-5'>Tools</h1>
                        <hr></hr>
                        <div className='p-5 md:text-[15px] text-[10px] font-extrabold'>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Visual Studio Code</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>pgAdmin</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Ubuntu</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Eclipse</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Figma</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Git</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Docker</h1>
                        </div>
                    </div>
                    <div id='accordian' className='accordian primary-bg rounded-[5px] row-span-1 '>
                        <h1 className='text-sm md:text-xl font-bold text-center p-5'>Soft Skills</h1>
                        <hr></hr>
                        <div className='p-5 md:text-[15px] text-[10px] font-extrabold'>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Communication</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Positive Attitude</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Time Management</h1>
                            <h1 className='my-3 border-b-2 md:p-5 p-2'>Team Player</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
