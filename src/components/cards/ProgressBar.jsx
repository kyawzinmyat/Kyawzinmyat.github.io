import React from 'react'
import '../styles/progressBar.css'

export default function ProgressBar({ width, height, radius = '10px', progress }) {
    const outerStyle = {
        width: width,
        borderRadius: radius,
    };

    const innerStyle = {
        height: height,
    }

    return (
        <div style={outerStyle}>
            <div style={innerStyle} className={progress}>
            </div>
        </div >
    )
}
