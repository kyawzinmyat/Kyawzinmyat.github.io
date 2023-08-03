import React from 'react'
import '../styles/progressBar.css'

export default function ProgressBar({ width = '150px', height = '150px', radius = '5px' }) {
    const style = {
        height: height,
        width: width,
        background: 'red'
    };
    const t = `w-[` + width + '] border-2'
    // const h = 'h-[10px] linear-progress'
    const h = `h-[` + height + ']  linear-progress'
    return (
        <div className={t}>
            <div className={h}>
            </div>
        </div >
    )
}
