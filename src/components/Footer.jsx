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
                        <p className='py-2'>Junior Software Developer</p>
                    </div>
                    <div className='md:text-lg text-sm'>
                        <ul>
                            <li className=''></li>
                            <li className=''>
                                < a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`} className='md:inline-flex gap-10 py-2 gap-2 items-center'>
                                    <FaEnvelope></FaEnvelope>
                                    <span>kyawzinmyat00000001@gmail.com</span>
                                </a>
                            </li>
                            <li className='py-2 md:inline-flex gap-10 gap-2 items-center'>
                                <FaPhone></FaPhone>+95 (09) 968-935-307
                            </li>
                            <li className='py-2'>
                                <a className='md:inline-flex gap-10 gap-2 items-center' href='https://github.com/kyawzinmyat/'>
                                    <FaGithub></FaGithub> Kyawzin Myat
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='grid grid-cols-3'>
                            <p>Python</p>
                            <p>Html</p>
                            <p>JavaScript</p>
                            <p>Odoo</p>
                            <p>CSS</p>
                            <p>React</p>
                            <p>Flask</p>
                            <p>Bootstrap</p>
                            <p>Vite</p>
                            <p>Django</p>
                            <p>Tailwind CSS</p>
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
