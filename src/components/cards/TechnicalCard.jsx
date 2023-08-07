import React, { useState } from 'react'
import '../../styles/technicalStacks.css'


export default function TechnicalCard({ information, title }) {

    let [click, setClick] = useState();

    const onClickAccordian = () => {
        setClick(!click);
    }

    let classAccordian = 'accordian secondary-bg rounded-[5px] row-span-3 shadow-lg border-2 border-indigo-100';
    if (click) classAccordian = 'accordian secondary-bg rounded-[5px] row-span-3 shadow-lg border-2 border-indigo-100 accordian-expand';
    if (click === false) classAccordian = 'accordian secondary-bg rounded-[5px] row-span-3 shadow-lg border-2 border-indigo-100 accordian-collapse';

    return (
        <div>
            <div id='accordian' className={classAccordian} onClick={onClickAccordian}>
                <h1 className='text-sm md:text-xl font-medium text-center p-5 cursor-pointer h-[70px] secondary-accent-bg black-color'>{title}</h1>
                <hr></hr>
                <div className='p-5 md:text-[15px] text-[10px] black-color font-md'>
                    {information.map(
                        (inf, index) => {
                            if (inf.length > 1) {
                                return (<div key={index}>
                                    <h1 className='my-3'>{inf[0]}</h1>
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
                                return <h1 className='my-3 border-b-2 md:p-5 p-1' key={index}>{inf[0]}</h1>
                            }
                        }
                    )}
                </div>
            </div>
        </div>
    )
}
