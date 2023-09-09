import React, { useState } from 'react'
import { GoBrowser } from "react-icons/go";
import { VscServerProcess } from "react-icons/vsc";
import { FaBusinessTime } from "react-icons/fa"
import '../styles/services.css';
import { motion } from "framer-motion"
import { DiResponsive } from "react-icons/di"

export default function Services() {

    let [active, setActive] = useState(0);

    return (
        <div className='box'>
            <h1 className='p-[3em] w-11/12 md:w-8/12 mx-auto text-center secondary-gradient-color'>Employ the services to keep your company abreast of new technological developments!</h1>
            <div className='grid grid-cols-1 grid-rows-4 md:grid-rows-2 mx-auto gap-10 w-11/12 md:w-10/12 text-left md:grid-cols-2 lg:grid-cols-3'>
                <motion.div viewport={{ once: true }} whileInView={{opacity: active === 0 ? 1: 0.5}} transition={{ delay: .3 }}
 initial={{opacity: 0}} className={'rounded-[15px] md:col-start-2 shadow-sm shadow-neutral-700 p-[2em]'} style={active === 0 ? {
                    background: "linear-gradient(to right, var(--primary-accent-color) 0%,rgba(160,77,239, 0.6) 100%)"
                } : {    opacity: 0.5 }} onClick={() => setActive(0)}>
                    <span className='inline-flex gap-5 items-center '>
                        <GoBrowser size='30px' fill='#B2FF59'></GoBrowser>
                        <h3>Landing Pages</h3>
                    </span>
                    <div className='my-[2em]'>
                        <p>Create a striking, straightforward, and contemporary landing page to impress visitors and strengthen customer relationships. </p>
                    </div>
                </motion.div>
                <motion.div viewport={{ once: true }} whileInView={{opacity: active === 1 ? 1: 0.5}} transition={{ delay: .4 }}
 initial={{opacity: 0}} className='rounded-[15px] shadow-sm shadow-neutral-700 p-[2em]' style={active === 1 ? {
                    background: "linear-gradient(to right, var(--primary-accent-color) 0%,rgba(160,77,239, 0.6) 100%)"
                } : {}}  onClick={() => setActive(1)}>
                    <span className='inline-flex gap-5 items-center '>
                        <VscServerProcess size='30px' fill='#B2FF59'></VscServerProcess>
                        <h3>Backend Application</h3>
                    </span>
                    <div className='my-[2em]'>
                        <p>Additionally, it is feasible to combine the business logic with a front-end website made by the client or by me to create a completely functional business web application.</p>
                    </div>
                </motion.div>
                <motion.div viewport={{ once: true }} whileInView={{opacity: active === 2 ? 1: 0.5}} transition={{ delay: .5 }}
 initial={{opacity: 0}} className='rounded-[15px] shadow-sm shadow-neutral-700 p-[2em]' style={active === 2 ? {
                    background: "linear-gradient(to right, var(--primary-accent-color) 0%,rgba(160,77,239, 0.6) 100%)"
                } : {    opacity: 0.5 }}  onClick={() => setActive(2)}>
                    <span className='inline-flex gap-5 items-center '>
                        <FaBusinessTime size='30px' fill='#B2FF59'></FaBusinessTime>
                        <h3>ERP Business Website</h3>
                    </span>
                    <div className='my-[2em]'>
                        <p>Create a striking, straightforward, and contemporary landing page to impress visitors and strengthen customer relationships. </p>
                    </div>
                </motion.div>
                <motion.div viewport={{ once: true }} whileInView={{opacity: active === 3 ? 1: 0.5}} transition={{ delay: .6 }}
 initial={{opacity: 0}}   className='rounded-[15px] md:col-start-2 shadow-sm shadow-neutral-700 p-[2em]' style={active === 3 ? {
                    background: "linear-gradient(to right, var(--primary-accent-color) 0%,rgba(160,77,239, 0.6) 100%)", opacity: 1
                } : {    opacity: 0.5 }}  onClick={() => setActive(3)}>
                    <span className='inline-flex gap-5 items-center '>
                        <DiResponsive size='30px' fill='#B2FF59'></DiResponsive>
                        <h3>Responsive Fullstack Web</h3>
                    </span>
                    <div className='my-[2em]'>
                        <p>Web applications with a full range of functionality, including business logic, complicated computations, and a lovely user experience that works flawlessly on a variety of devices, including a phone, laptop, etc.</p>
                    </div>
                </motion.div>
            </div>
        </div >
    )
}
