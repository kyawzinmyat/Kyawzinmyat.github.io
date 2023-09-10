import React, { useState, useRef } from 'react'
import '../../styles/technicalStacks.css'
import { motion, useInView, useTransform } from 'framer-motion';
import CardTitle from './CardTitle';


export default function TechnicalCard({ information, title, setCurrentImage }) {

    let [click, setClick] = useState();

    const onClickAccordian = () => {
        setClick(!click);
    }

    let classAccordian = 'rounded-[5px] row-span-3 shadow-lg';
    if (click) classAccordian = 'rounded-[5px] row-span-3 shadow-lg ';
    if (click === false) classAccordian = 'rounded-[5px] row-span-3 shadow-lg';

    return (
        <div>
            <div id='accordian' className={classAccordian} onClick={onClickAccordian}>
                {/* <h3 className='text-sm md:text-xl font-medium text-center p-5 cursor-pointer h-[80px]  primary-color rounded-[20px]'>{title}</h3> */}
                <div className='flex gap-20 items-start w-full p-5 md:text-[15px] text-[10px] primary-color font-md'>
                    <div className='w-full flex flex-col '>
                        {information.map(
                            (inf, index) => {
                                return <CardTitle setCurrentImage={setCurrentImage} image={inf[1]} title={inf[0]} key={index}></CardTitle>

                            }
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
