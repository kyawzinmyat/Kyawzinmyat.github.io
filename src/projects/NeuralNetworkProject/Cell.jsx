import React from 'react'

export default function Cell({row_, col_, isDraw, width, height}) {

  return (
    <p className={`w-[${width}px] h-[${height}px] ` + (isDraw ? 'secondary-bg': 'primary-bg')}></p>
  )
}
