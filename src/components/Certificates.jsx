import CS50Image from '../assets/cs50.webp'
import JavaImage from '../assets/java_oo.png'
import React, { useRef, useEffect } from 'react'
import CertificateCard from './cards/CertificateCard'
import { useInView } from "framer-motion"

const certificates = [
  {img: CS50Image, title: 'Introduction to Computer Science is a course that focuses on developing students problem-solving abilities rather than their knowledge of various programming syntaxes.', url: 'https://certificates.cs50.io/f9b7056e-0a0d-452d-b2ce-adbe100e255e.pdf?size=letter'},
  {img: JavaImage, title: 'This course focused on using the Java programming language for powerful, complex systems and object-oriented programming.', url: 'https://coursera.org/share/af78d66dcb53c5cb928eb5ce058ec6e6'}
]

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className='primary-color text-3xl text-center font-bold m-5 md:p-[2em] p-[2em] box' >
      <h1 className='p-[2em] md:text-3xl text-lg primary-color'>Certificates</h1>
      <div className='flex flex-wrap md:w-8/12 mx-auto gap-[3em] my-5' ref={ref} style={{
        transform: isInView ? 'none' : 'translateY(-200px)', opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}>
        {certificates.map((certificate, index) => {
            return <CertificateCard key={index} title={certificate.title} img={certificate.img} url={certificate.url}></CertificateCard>
        })}
      </div>
    </ div>
  )
}
