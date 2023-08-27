import React, { useState } from 'react'
import '../../styles/technicalStacks.css'


export default function TechnicalCard({ information, title }) {

    let [click, setClick] = useState();

    const onClickAccordian = () => {
        setClick(!click);
    }

    let classAccordian = 'accordian  rounded-[5px] row-span-3 shadow-lg';
    if (click) classAccordian = 'accordian  rounded-[5px] row-span-3 shadow-lg accordian-expand';
    if (click === false) classAccordian = 'accordian  rounded-[5px] row-span-3 shadow-lg accordian-collapse';

    return (
        <div>
            <div id='accordian' className={classAccordian} onClick={onClickAccordian}>
                <h3 className='text-sm md:text-xl font-medium text-center p-5 cursor-pointer h-[70px] border-0 primary-accent-outline primary-color rounded-full'>{title}</h3>
                <div className='p-5 md:text-[15px] text-[10px] primary-color font-md'>
                    {information.map(
                        (inf, index) => {
                            if (inf.length > 1) {
                                return (<div key={index}>
                                    <p className='my-3'>{inf[0]}</p>
                                    <ul key={index} className='border-b-2 p-2 flex flex-col gap-5'>
                                        {
                                            inf.slice(1).map(
                                                (innerInf, i) => {
                                                    return <li key={i}>{innerInf}</li>
                                                }
                                            )
                                        }
                                    </ul>
                                    <br></br></div>)
                            }else if (inf.length <= 1 ){
                                return <p className='my-3 border-b-2 md:p-5 p-1' key={index}>{inf[0]}</p>
                            }
                        }
                    )}
                </div>
            </div>
        </div>
    )
}
