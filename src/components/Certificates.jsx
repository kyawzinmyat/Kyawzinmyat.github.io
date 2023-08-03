import React from 'react'
import CS50Image from '../assets/cs50.webp'
import JavaImage from '../assets/java_oo.png'
export default function Certificates() {
  return (
    <div className='black-color text-3xl text-center font-bold m-5 md:p-[5em] p-[2em] box'>
        <h1 className='p-[2em] md:text-3xl text-lg primary-gradient-color'>Certificates</h1>
        <div className='flex flex-wrap md:w-8/12 mx-auto gap-[3em] my-5 '>
            <div className='shadow-lg md:w-1/3 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                <img src={CS50Image} alt='CS 50 Image'></img>
                <p className='p-4 md:text-md text-sm'>Introduction to Computer Science is a course that focuses on developing students' problem-solving abilities rather than their knowledge of various programming syntaxes.</p>
            </div>
            <div className='shadow-lg md:w-1/3 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                <img src={JavaImage} alt='Java Object Oriented Image'></img>
                <p className='p-4 md:text-md text-sm'>This course focused on using the Java programming language for powerful, complex systems and object-oriented programming.</p>
            </div>
        </div>
    </div>
  )
}
