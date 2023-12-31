import React from 'react'
import { FaEnvelope, FaGithub, FaFacebookSquare, FaPhone } from 'react-icons/fa'

export default function Footer() {
    const email = 'kyawzinmyat00000001@gmail.com';
    const subject = '';
    const body = '';
    return (
        <>
            <div className='box secondary-bg p-[3em] border-t-2 primary-color'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-[4em] gap-10'>
                    <div>
                        <h1 className='py-2 text-lg'>Kyaw Zin Myat</h1>
                        <p className='py-2'>20 Years Old</p>
                        <p className='py-2'>Software Developer</p>
                    </div>
                    <div className='md:text-md text-xs sm:text-sm'>
                        <ul>
                            <li className=''></li>
                            <li className=''>
                                <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`} className='inline-flex  py-2 gap-2 items-center'>
                                    <FaEnvelope></FaEnvelope>
                                    <span>kyawzinmyat00000001@gmail.com</span>
                                </a>
                            </li>
                            <li className='py-2 inline-flex  gap-2 items-center'>
                                <FaPhone></FaPhone>+95 (09) 968-935-307
                            </li>
                            <li className='py-2'>
                                <a className='inline-flex  gap-2 items-center' href='https://github.com/kyawzinmyat/'>
                                    <FaGithub></FaGithub> Kyawzin Myat
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='grid grid-cols-3 list-none md:text-sm'>
                            <li>Python</li>
                            <li>Html</li>
                            <li>JavaScrilit</li>
                            <li>Odoo</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Flask</li>
                            <li>Bootstrali</li>
                            <li>Vite</li>
                            <li>Django</li>
                            <li>Tailwind CSS</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box w-full text-center secondary-accent-bg black-color p-5'>
                <p>Copyright © KyawzinMyat, 20 2023</p>
            </div>
        </>
    )
}
