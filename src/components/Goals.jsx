import React from 'react'
import '../styles/goals.css'
import { useEffect } from 'react';

export default function Goals() {
    useEffect(() => {
        const leftObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('left-fall', entry.isIntersecting);
                if (entry.isIntersecting) leftObserver.unobserve(entry.target)
            })
        },
        {
            threshold: 1
        });
        const rightObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('right-fall', entry.isIntersecting);
                if (entry.isIntersecting) rightObserver.unobserve(entry.target)
            })
        },
        {
            threshold: 1
        });
        const leftFall = document.querySelectorAll('.third');
        leftFall.forEach(fall => {
            leftObserver.observe(fall)
        })
        const rightFall = document.querySelectorAll('.second');
        rightFall.forEach(fall => {
            rightObserver.observe(fall)
        })
    });

    return (
        <div className=' w-8/12 mx-auto box my-5 secondary-color p-[3em]'>
            <h1 className='font-extrabold primary-color text-lg md:text-3xl text-center p-5 my-[3em]'>Personal Goals and Road Map</h1>
            <div className='grid grid-rows-5 md:grid-cols-10 gap-[5em] p-5 secondary-color font-extrabold'>
                <div className='mx-auto md:w-full bg-[#ec5656d3] md:col-start-5 md:col-span-4 row-start-1 rounded-lg first'>
                    <p className='p-7 '>start a professional software developer position in the US</p>
                </div>
                <div className='row-start-2 md:col-start-3 md:col-span-4  bg-[#df16e2c0] rounded-lg second'>
                    <p className='p-7 '>Upgrading my computer science skills by learning design patterns.</p>
                </div>
                <div className='row-start-3  md:col-start-4 md:col-span-4  bg-[#52d0aac4] rounded-lg first'>
                    <p className='p-7'>Put more emphasis on data structures and algorithms as a major step toward my dream.</p>
                </div>
                <div className='row-start-4  bg-[#ddca1ee4]  md:col-start-3 md:col-span-4 rounded-lg first'>
                    <p className=' p-7'>Improving English Language Proficiency for Better Communication</p>
                </div>
                <div className='row-start-5  bg-[#c76c57ec] md:col-start-2 md:col-span-4 rounded-lg third'>
                    <p className='p-7 '>Pursuing a bachelor's While taking up the experience as much as I can</p>
                </div>
            </div>
        </div>
    )
}
