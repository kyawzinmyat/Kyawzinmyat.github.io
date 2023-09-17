import React, { useState } from 'react'
import Canvas from './Canvas'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { motion, transform } from 'framer-motion'
import { io } from 'socket.io-client';

export default function NeuralNetworkProject() {

    let [predictedNumber, setPredictedNumber] = useState();
    let [clear, setClear] = useState();


    const handleOnClickedClear = () => {
        setClear(!clear);
        _socket.emit('reset');
        setPredictedNumber()
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 secondary-bg'>
            <div className='primary-color flex justify-center items-center'>
                <motion.div className='p-[5em] text-center'
                    initial={{ opacity: 0.1, scale: 0.2 }}
                    whileInView={
                        { opacity: 1, scale: 1, translateY: 0 }
                    }
                    transition={{ delay: 0.5 }}
                >
                    <h2 className='secondary-accent-bg secondary-color p-5 rounded-full font-bold'>
                        Handwritten Recognition
                    </h2>
                    <p className='lg:text-sm xl:text-lg w-[30ch] text-sm md:w-10/12 mx-auto lg:p-0  font-md py-5 md:p-5 lg:py-4'>Classic Simple Neural Network Project to Recognize Digits Starting from 0 to 9 Without Using Predefined Machine Learning Framework.</p>
                    <p className='lg:py-4 p-2 text-xs font-md'>Technolgies Using/ </p><span className='font-extralight'>Python, Numpy, Pillow</span>
                </motion.div>
            </div>
            <div className='col-span-2 grid grid-cols-1 xl:grid-cols-3'>
                <div className='col-span-2 p-5 mx-auto'>
                    <Canvas clear={clear} setPredictedNumber={setPredictedNumber}></Canvas>
                </div>
                <div className='primary-color flex justify-center items-center text-center'>

                    <div>
                        <h3 className='lg:text-lg text-md m-5'>Predicted Number</h3>
                        <h4 className='text-center black-color text-lg xl:text-3xl rounded-full p-3 xl:p-3 secondary-accent-bg'>{predictedNumber}</h4>
                        <div onClick={handleOnClickedClear}>
                            <PrimaryButton>Clear the Board</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
