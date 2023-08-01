import React from 'react'
import PrimaryButton from './buttons/PrimaryButton'
import Hamburger from './Hamburger'

export default function Navbar() {

    let onClickHamburger = () => {
        const hb = document.getElementById('nav-toggle');
        hb.classList.toggle('nav-open');
        let subNav = document.getElementById('sub-nav');
        let subButton = document.getElementById('sub-button');
        subNav.classList.toggle('hidden');
        subButton.classList.toggle('hidden');
    }

    return (
        <div className='box sticky top-0 z-10000' style={{zIndex:'10000'}}>
            <div className='flex md:flex-row md:justify-between md:items-center flex-col gap-10 w-full md:w-11/12 mx-auto secondary-bg primary-color'>
                <div className='md:mx-[2em] md:my-0 my-5'>
                    <h1 className='font-extrabold text-xl md:m-0 m-4'>KZM/ Dev</h1>
                </div>
                <ul className='hidden flex md:flex md:flex-row md:justify-evenly md:m-0 m-3 md:gap-0 gap-10 flex-col w-4/12 text-md' id='sub-nav'>
                    <li className='md:border-none border-b-2 border-indigo-200'><a className='font-extrabold' href='/'>Home</a></li>
                    <li className='md:border-none border-b-2 border-indigo-200'><a className='font-extrabold' href=''>About Me</a></li>
                    <li className='md:border-none border-b-2 border-indigo-200'><a className='font-extrabold' href=''>Projects</a></li>
                </ul>
                <div className='font-extrabold text-xl md:my-0 m-3 hidden md:block' id='sub-button'>
                    <PrimaryButton>Contact Me</PrimaryButton>
                </div>

            </div>
            <div className='desktop-hide' onClick={onClickHamburger}>
                <Hamburger></Hamburger>
            </div>
        </div>
    )
}
